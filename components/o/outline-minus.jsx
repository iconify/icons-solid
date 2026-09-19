import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.doplcl7zi {
  fill: currentColor;
  d: path("M19 12.998H5v-2h14z");
}
</style><path class="doplcl7zi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-minus"} {...others} />);
}

export default Component;
