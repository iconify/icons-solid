import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qr9jmhbjt {
  fill: currentColor;
  d: path("M14.938 21.063Q14.5 20.625 14.5 20t.438-1.062T16 18.5t1.063.438T17.5 20t-.437 1.063T16 21.5t-1.062-.437M6 21V7h3v14zm4.5 0V7H14V4h-2V2h4v15q-1.25 0-2.125.875T13 20q0 .275.038.513t.137.487z");
}
</style><path class="qr9jmhbjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:carry-on-bag-sharp"} {...others} />);
}

export default Component;
