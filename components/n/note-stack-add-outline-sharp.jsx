import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l2wn3vb1t {
  fill: currentColor;
  d: path("M7 22V6.975h15V17l-5 5zm2-2h7l4-4V9H9zm-4.7-.925L1.675 4.3L16.45 1.675L17.05 5H15l-.175-1L4 5.925l1 5.65v7.375zm9.2-.575h2v-3h3v-2h-3v-3h-2v3h-3v2h3zm1-4");
}
</style><path class="l2wn3vb1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:note-stack-add-outline-sharp"} {...others} />);
}

export default Component;
