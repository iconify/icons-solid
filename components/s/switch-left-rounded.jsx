import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q_87fgp1z {
  fill: currentColor;
  d: path("M9 17.6q-.2 0-.375-.075T8.3 17.3l-4.6-4.6q-.15-.15-.213-.325T3.426 12t.063-.375t.212-.325l4.6-4.6q.15-.15.325-.225T9 6.4q.4 0 .7.288t.3.737v9.15q0 .45-.3.738T9 17.6m-.5-2.225v-6.75L5.125 12zM15 17.6q-.4 0-.7-.288t-.3-.737v-9.15q0-.45.3-.737T15 6.4q.2 0 .375.075t.325.225l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.15.15-.325.225T15 17.6");
}
</style><path class="q_87fgp1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:switch-left-rounded"} {...others} />);
}

export default Component;
