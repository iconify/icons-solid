import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v_9os6wva {
  fill: currentColor;
  d: path("m21 18.189l-6.996-6.997H20V8.808h-8.38L7.811 5H21zM4 11.192h5.766L7.38 8.808H4zm17.104 11.339L17.573 19H3V5h2l1 1H4.573L1.881 3.308l.713-.714l19.223 19.223z");
}
</style><path class="v_9os6wva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:credit-card-off-sharp"} {...others} />);
}

export default Component;
