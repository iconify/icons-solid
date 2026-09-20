import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.si9po1buh {
  fill: currentColor;
  d: path("M15 20V4h4q.825 0 1.413.588T21 6v12q0 .825-.587 1.413T19 20zm-4 2v-2H5q-.825 0-1.412-.587T3 18V6q0-.825.588-1.412T5 4h6V2h2v20z");
}
</style><path class="si9po1buh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:split-scene-left"} {...others} />);
}

export default Component;
