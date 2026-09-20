import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t52si_s1w {
  fill: currentColor;
  d: path("M8.5 21.52v-1h7v1zM16.192 17V3H7.808v14zM12.588 6.086q.22-.222.22-.549t-.222-.547t-.549-.22t-.548.22t-.22.55t.222.547t.549.22t.548-.22M7.808 3v14zm-1 15V2h10.384v3.723h.731v2.9h-.73V18z");
}
</style><path class="t52si_s1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:mobile-dock-outline-sharp"} {...others} />);
}

export default Component;
