import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j_fmrzbmy {
  fill: currentColor;
  d: path("M3 21v-4.25l14.625-14.6l4.2 4.275L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4zM10.05 21l2-2H22v2z");
}
</style><path class="j_fmrzbmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:edit-line-sharp"} {...others} />);
}

export default Component;
