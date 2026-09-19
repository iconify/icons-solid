import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gvim0vlza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.775 5.5h28.45m-7.107 0v11.382c-.24 8.264-9.96 9.96-17.079 0L33.961 42.5");
}
</style><path class="gvim0vlza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:sanskrit-basics"} {...others} />);
}

export default Component;
