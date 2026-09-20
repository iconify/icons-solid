import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n18gh5b6l {
  fill: currentColor;
  d: path("M1 19V5h14v14zm16 0V5h2v14zm4 0V5h2v14z");
}
</style><path class="n18gh5b6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:overview-key-sharp"} {...others} />);
}

export default Component;
