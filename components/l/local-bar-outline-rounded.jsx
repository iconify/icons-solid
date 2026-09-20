import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kfvfjgf1n {
  fill: currentColor;
  d: path("M11 19v-5L3.45 5.5q-.2-.2-.325-.462T3 4.5q0-.65.45-1.075T4.55 3h14.9q.65 0 1.1.425T21 4.5q0 .275-.125.538t-.325.462L13 14v5h4q.425 0 .713.288T18 20t-.288.713T17 21H7q-.425 0-.712-.288T6 20t.288-.712T7 19zM7.45 7h9.1l1.8-2H5.65zM12 12.1L14.775 9h-5.55zm0 0");
}
</style><path class="kfvfjgf1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:local-bar-outline-rounded"} {...others} />);
}

export default Component;
