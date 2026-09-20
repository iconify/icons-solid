import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.prbei6b4s {
  fill: currentColor;
  d: path("M8.5 21.52v-1h7v1zm4.088-15.434q.22-.222.22-.549t-.222-.548t-.549-.22t-.548.222t-.22.549t.222.547t.549.22t.548-.22M6.808 18V2h10.384v3.723h.731v2.9h-.73V18z");
}
</style><path class="prbei6b4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:mobile-dock-sharp"} {...others} />);
}

export default Component;
