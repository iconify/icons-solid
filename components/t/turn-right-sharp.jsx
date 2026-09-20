import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.agkb49b-d {
  fill: currentColor;
  d: path("M7.48 19V9.5h10.605l-2.1-2.1l.707-.708L20 10l-3.308 3.308l-.707-.708l2.1-2.1H8.48V19z");
}
</style><path class="agkb49b-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:turn-right-sharp"} {...others} />);
}

export default Component;
