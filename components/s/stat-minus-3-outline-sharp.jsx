import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ap0w3lbdk {
  fill: currentColor;
  d: path("m12 21.252l-5.308-5.308l.708-.707L12 19.83l4.6-4.594l.708.707zm0-5.95L6.692 9.994l.708-.707L12 13.88l4.6-4.594l.708.707zm0-5.95L6.692 4.044l.708-.707L12 7.93l4.6-4.594l.708.707z");
}
</style><path class="ap0w3lbdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stat-minus-3-outline-sharp"} {...others} />);
}

export default Component;
