import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j99n23itx {
  fill: currentColor;
  d: path("M6.5 17v-2h2v2zm10 0v-2h4v-2h-4V7h6v2h-4v2h2q.825 0 1.413.588T22.5 13v2q0 .825-.587 1.413T20.5 17zm-7 0v-4q0-.825.588-1.412T11.5 11h2V9h-4V7h4q.825 0 1.413.588T15.5 9v2q0 .825-.587 1.413T13.5 13h-2v2h4v2zm-6 0V9h-2V7h4v10z");
}
</style><path class="j99n23itx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:speed-1-25"} {...others} />);
}

export default Component;
