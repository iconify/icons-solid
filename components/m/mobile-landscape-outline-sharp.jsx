import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rdv22s0vg {
  fill: currentColor;
  d: path("M2 18V5.923h4.83V5h3.686v.923H22V18zm19-1V6.923H3V17zM3 17V6.923zm3.088-4.49q.22-.222.22-.55t-.222-.548t-.549-.22t-.547.222t-.22.549t.22.548t.55.22t.548-.222");
}
</style><path class="rdv22s0vg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:mobile-landscape-outline-sharp"} {...others} />);
}

export default Component;
