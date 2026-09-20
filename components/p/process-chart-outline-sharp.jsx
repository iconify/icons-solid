import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nk5agebqs {
  fill: currentColor;
  d: path("m3.646 17.777l-.896-.439L8.308 6.224l.896.438zm6.023 0l-.896-.438l5.558-11.116l.896.438zm6.023 0l-.896-.438l5.558-11.116l.896.439z");
}
</style><path class="nk5agebqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:process-chart-outline-sharp"} {...others} />);
}

export default Component;
