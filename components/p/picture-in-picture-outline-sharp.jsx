import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d9gbh8bts {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h16V6H4zm7.308-5.308H19V7h-7.692zm1-1V8H18v3.692zM4 18V6z");
}
</style><path class="d9gbh8bts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:picture-in-picture-outline-sharp"} {...others} />);
}

export default Component;
