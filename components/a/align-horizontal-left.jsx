import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fz-_embbz {
  fill: currentColor;
  d: path("M2 22V2h2v20zm4-5v-3h10v3zm0-7V7h16v3z");
}
</style><path class="fz-_embbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-horizontal-left"} {...others} />);
}

export default Component;
