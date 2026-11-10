import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j1qvtwxjy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.802 7.644c7.537 0 10.266.177 14.744-1.268L16.647 30.35C12.815 41.98 5.863 40.955 4.668 34.369c-1.047-5.772 2.757-12.719 12.54-12.081c9.553.622 17.597 3.45 26.292 9.147");
}

.vgpxdkbrt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.462 13.833c-.101 12.857-.866 19.393-12.019 27.791");
}
</style><path class="vgpxdkbrt"/><path class="j1qvtwxjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mihon"} {...others} />);
}

export default Component;
