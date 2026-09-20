import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x03xhlbbr {
  fill: currentColor;
  d: path("M20.846 22.204L1.392 2.75l.708-.708l19.454 19.454zM12.588 6.086q.22-.222.22-.549t-.222-.547t-.549-.22t-.548.22t-.22.55t.222.547t.549.22t.548-.22M6 22V5.942l12 12V22zm12-6.934L6.029 2.832V2H18v4.83h.923v3.686H18z");
}
</style><path class="x03xhlbbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:mobile-off-sharp"} {...others} />);
}

export default Component;
