import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.so3kgfb0j {
  fill: currentColor;
  d: path("M16.2 12.9q.55-.275.55-.9t-.55-.9L7.45 6.725q-.5-.25-.975.038T6 7.625v2.725L11 12l-5 1.65v2.725q0 .575.475.863t.975.037zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z");
}
</style><path class="so3kgfb0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:outbox-alt-rounded"} {...others} />);
}

export default Component;
