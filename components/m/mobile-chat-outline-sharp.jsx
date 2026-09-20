import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rpdk9lbxp {
  fill: currentColor;
  d: path("M7 21V3zm10 0v-2.308zm-2.884-5.692h5.653v-4h-5.653zm-1 2.48v-7.48h7.653v6h-6.173zM6 22V2h12v5.923h-1V3H7v18h10v-2.308h1V22zm6.588-15.914q.22-.222.22-.549t-.222-.547t-.549-.22t-.548.22t-.22.55t.222.547t.549.22t.548-.22m1.528 9.22v-4z");
}
</style><path class="rpdk9lbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:mobile-chat-outline-sharp"} {...others} />);
}

export default Component;
