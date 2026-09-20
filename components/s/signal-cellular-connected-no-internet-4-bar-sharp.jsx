import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.klinfuimz {
  fill: currentColor;
  d: path("M2 22L22 2v6h-4v14zm18-4v-8h2v8zm0 4v-2h2v2z");
}
</style><path class="klinfuimz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:signal-cellular-connected-no-internet-4-bar-sharp"} {...others} />);
}

export default Component;
