import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gnjs9vbqr {
  fill: currentColor;
  d: path("M17 20V4h2v16zM2 22V2h13v20zm19-4V6h1.5v12zM4 20h9V4H4zM4 4v16z");
}
</style><path class="gnjs9vbqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:web-stories-outline-sharp"} {...others} />);
}

export default Component;
