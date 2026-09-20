import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tt64c31ag {
  fill: currentColor;
  d: path("M3 17V7h2v4h4V7h2v10H9v-4H5v4zm12 0q-.825 0-1.412-.587T13 15V9q0-.825.588-1.412T15 7h6v2h-6v2h4q.825 0 1.413.588T21 13v2q0 .825-.587 1.413T19 17zm0-4v2h4v-2z");
}
</style><path class="tt64c31ag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-h6-outline-sharp"} {...others} />);
}

export default Component;
