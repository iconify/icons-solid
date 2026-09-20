import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.er_nv2bch {
  fill: currentColor;
  d: path("M17.985 13L4.846 8.246l.316-.938L18.608 12.2q.73.277 1.061.854T20 14.269v3.115q0 .691-.462 1.153T18.384 19H5.616q-.691 0-1.153-.462T4 17.384v-2.768q0-.691.463-1.153T5.616 13zm-7.831 3.5H17.5v-1h-7.346zm-2.605.049q.22-.22.22-.549t-.22-.549t-.549-.22t-.549.22t-.22.549t.22.549t.549.22t.549-.22");
}
</style><path class="er_nv2bch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:scanner"} {...others} />);
}

export default Component;
