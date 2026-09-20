import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ip9_620pf {
  fill: currentColor;
  d: path("M20 17.175L7.4 4.6L10 2h10zm.5 6.125L15.2 18l1.425-1.4L20 19.975V22H4V8l.6-.6L.7 3.5l1.425-1.4L21.9 21.875z");
}
</style><path class="ip9_620pf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:no-sim-sharp"} {...others} />);
}

export default Component;
