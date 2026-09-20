import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m9x5pbbod {
  fill: var(--svg-color--f50db4, #f50db4);
  d: path("M21 11.829A8.83 8.83 0 0 1 12.171 3h-.342v8.829H3v.342A8.83 8.83 0 0 1 11.829 21h.342v-8.829H21z");
}
</style><path class="m9x5pbbod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:unichain"} {...others} />);
}

export default Component;
