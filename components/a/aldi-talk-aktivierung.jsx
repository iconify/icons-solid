import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.zaztcersr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.41 24.76l-8.832-1.234l1.916 8.709m3.458-3.737l11.096 10.265M30.41 24.761l11.096 10.265L34.59 42.5L23.494 32.235zm-18.34-.251h5.443m-5.442-4.661H26.2M16.586 5.5v10.09H6.495zm0 0h15.921v17.106m-7.489 15.665H6.494V15.59");
}
</style><path class="zaztcersr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:aldi-talk-aktivierung"} {...others} />);
}

export default Component;
