import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lwgm1fu6p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.852 32.708a8.3 8.3 0 0 1-7.236-4.355a9.01 9.01 0 0 1 .009-8.704a8.3 8.3 0 0 1 7.245-4.338m0-.001l9.001-.035m-9.457 17.46l8.639.09m14.095-17.651a8.3 8.3 0 0 1 7.236 4.355a9.01 9.01 0 0 1-.009 8.704a8.3 8.3 0 0 1-7.245 4.338m.09-17.369l-9 .036m8.91 17.333l-8.64-.09m-10.984-8.749h16.733v.182H15.506z");
}
</style><path class="lwgm1fu6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:url-checker"} {...others} />);
}

export default Component;
