import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nu3sdabvr {
  fill: currentColor;
  d: path("M3 18V6h18v3.289h-1L15.788 13.5H6.5v1h8.289l-3.5 3.5zm3.5-7.5h5v-1h-5zm6.808 9.423v-.788l6.111-6.112l.789.789l-6.112 6.111zm7.461-6.711l-.788-.789l.782-.782q.109-.108.24-.108q.13 0 .235.106l.316.315q.105.108.105.238t-.108.238z");
}
</style><path class="nu3sdabvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:checkbook-sharp"} {...others} />);
}

export default Component;
