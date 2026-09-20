import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d33znabhl {
  fill: currentColor;
  d: path("M13.577 14.923h5.846V9.077h-5.846zm-1 1V12.5h-9.5v-1h9.5V8.077h7.846v7.846zM16.5 12");
}
</style><path class="d33znabhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:line-end-square-outline"} {...others} />);
}

export default Component;
