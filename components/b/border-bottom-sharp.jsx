import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ilt0uabhz {
  fill: currentColor;
  d: path("M4 20v-1h16v1zm0-3.692v-1.231h1.23v1.23zm0-3.693v-1.23h1.23v1.23zm0-3.692v-1.23h1.23v1.23zm0-3.692V4h1.23v1.23zm3.692 7.384v-1.23h1.231v1.23zm0-7.384V4h1.231v1.23zm3.692 11.077v-1.231h1.231v1.23zm0-3.693v-1.23h1.231v1.23zm0-3.692v-1.23h1.231v1.23zm0-3.692V4h1.232v1.23zm3.693 7.384v-1.23h1.23v1.23zm0-7.384V4h1.23v1.23zm3.692 11.077v-1.231H20v1.23zm0-3.693v-1.23H20v1.23zm0-3.692v-1.23H20v1.23zm0-3.692V4H20v1.23z");
}
</style><path class="ilt0uabhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:border-bottom-sharp"} {...others} />);
}

export default Component;
