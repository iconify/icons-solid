import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sbgj34bnx {
  fill: currentColor;
  d: path("M7 22V6.975h15V17l-5 5zm2-2h7v-4h4V9H9zm-4.7-.925L1.675 4.3L16.45 1.675L17.05 5H15l-.175-1L4 5.925l1 5.65v7.375zM14.5 14.5");
}
</style><path class="sbgj34bnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:note-stack-outline-sharp"} {...others} />);
}

export default Component;
