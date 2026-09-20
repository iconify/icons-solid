import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zlk4w4c1a {
  fill: currentColor;
  d: path("M15 22v-7h5v7ZM4 22V2h16v11h-7v9Z");
}
</style><path class="zlk4w4c1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:float-portrait-sharp"} {...others} />);
}

export default Component;
