import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fpi1t4bfg {
  fill: currentColor;
  d: path("m14.352 12l-4.086-5.713q-.177-.25-.04-.519t.44-.268q.12 0 .228.056q.109.057.17.157L15.57 12l-4.507 6.287q-.061.1-.171.157t-.231.056q-.293 0-.433-.268t.037-.518z");
}
</style><path class="fpi1t4bfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:single-arrow-outline-rounded"} {...others} />);
}

export default Component;
