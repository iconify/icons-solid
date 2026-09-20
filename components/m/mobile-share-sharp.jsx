import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uvecyqdku {
  fill: currentColor;
  d: path("M8 16h2v-3h2.15l-1.05 1.1l1.4 1.4L16 12l-3.5-3.5l-1.4 1.4l1.05 1.1H8zm-3 7V1h14v5.1h1v4.8h-1V23z");
}
</style><path class="uvecyqdku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mobile-share-sharp"} {...others} />);
}

export default Component;
