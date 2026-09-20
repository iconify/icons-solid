import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.snc3baboy {
  fill: var(--svg-color--7e43ff, #7e43ff);
  d: path("m12 3l7.941 4.5v9l-7.94 4.5l-7.942-4.5v-9z");
}
</style><path class="snc3baboy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:kin"} {...others} />);
}

export default Component;
