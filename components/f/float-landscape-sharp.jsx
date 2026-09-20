import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i-u27x01k {
  fill: currentColor;
  d: path("M2 20V4h20v7h-7v9Zm15 0v-7h5v7Z");
}
</style><path class="i-u27x01k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:float-landscape-sharp"} {...others} />);
}

export default Component;
