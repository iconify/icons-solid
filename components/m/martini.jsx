import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w65_jsb4l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3.002 3H20.998C21.8889 3 22.335 4.0771 21.7051 4.7071L13.0607 13.3515C12.4749 13.9373 11.5251 13.9373 10.9393 13.3515L2.2949 4.7071C1.665 4.0771 2.1111 3 3.002 3ZM4.5878 7H19.4122M12 13.7909V21M6 21H18");
}
</style><path class="w65_jsb4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:martini"} {...others} />);
}

export default Component;
