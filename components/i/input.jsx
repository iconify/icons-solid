import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ls5l9jbay {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18v-3h2v3h16V6H4v3H2V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm7.5-3.5l-1.4-1.45L12.175 13H2v-2h10.175L10.1 8.95l1.4-1.45L16 12z");
}
</style><path class="ls5l9jbay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:input"} {...others} />);
}

export default Component;
