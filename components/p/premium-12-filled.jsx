import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.lwujnyb0z {
  fill: currentColor;
  d: path("M3 1h1.046L2.997 4H1.191l1.362-2.724A.5.5 0 0 1 3 1M1.227 5l3.014 4.687L2.97 5zm2.779 0l1.53 5.645a.48.48 0 0 0 .928 0L7.998 5zm5.028 0L7.76 9.685L10.773 5zm1.775-1H9.006l-1.05-3H9a.5.5 0 0 1 .448.276zM7.947 4h-3.89l1.048-3h1.79z");
}
</style><path class="lwujnyb0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:premium-12-filled"} {...others} />);
}

export default Component;
