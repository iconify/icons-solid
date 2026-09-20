import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.whrx31b2u {
  fill: currentColor;
  d: path("M8.385 3h7.288L14 8.789h3.904l-2.56 3.725l-6.96-6.96zM11 18.846V13H8.385V9.812L2.74 4.167l.713-.713l17.092 17.092l-.713.714l-6.217-6.218z");
}
</style><path class="whrx31b2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:flash-off-sharp"} {...others} />);
}

export default Component;
