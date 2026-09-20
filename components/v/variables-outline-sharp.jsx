import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bp19homph {
  fill: currentColor;
  d: path("M4 16V8h16v8zm1-1h14V9H5zm0 0V9z");
}
</style><path class="bp19homph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:variables-outline-sharp"} {...others} />);
}

export default Component;
