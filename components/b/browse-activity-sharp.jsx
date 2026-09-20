import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g469cu25d {
  fill: currentColor;
  d: path("M1.77 19.462v-1h20.46v1zm1.23-2v-6.5h4.683l2 4h.623L13.95 8.49l1.252 2.47H21v6.5zm7.075-3.99l-1.764-3.51H3v-5.5h18v5.5h-5.183L14.337 7h-.662z");
}
</style><path class="g469cu25d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:browse-activity-sharp"} {...others} />);
}

export default Component;
