import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lhndg-blp {
  fill: currentColor;
  d: path("M4.539 19.346v-1.5H2v-8h3v4.5h14v-4.5h3v8h-2.538v1.5H18.5v-1.5H5.539v1.5zm1.461-6v-4.5H4V5.231h16v3.615h-2v4.5z");
}
</style><path class="lhndg-blp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:chair-sharp"} {...others} />);
}

export default Component;
