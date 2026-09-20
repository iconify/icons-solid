import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pcegas82u {
  fill: currentColor;
  d: path("M4 5v12zm5 15v-2H3V4h9.812q-.08.244-.119.485q-.04.24-.058.515H4v12h16v-5.825q.28-.061.521-.15q.24-.089.479-.21V18h-6v2zm9-11V6h-3V5h3V2h1v3h3v1h-3v3z");
}
</style><path class="pcegas82u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:display-add-outline-sharp"} {...others} />);
}

export default Component;
