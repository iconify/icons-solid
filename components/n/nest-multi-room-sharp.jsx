import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ef4fxjtok {
  fill: currentColor;
  d: path("m4 9l8-6l8 6zm0 12v-4h9v4zm11 0v-4h5v4zM4 15v-4h5v4zm7 0v-4h9v4z");
}
</style><path class="ef4fxjtok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:nest-multi-room-sharp"} {...others} />);
}

export default Component;
