import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j-gyshbnk {
  fill: currentColor;
  d: path("M12.775 12L8.9 6.575q-.35-.5-.088-1.037T9.7 5q.25 0 .475.113t.35.312l4.7 6.575l-4.7 6.575q-.125.2-.35.313T9.7 19q-.6 0-.875-.537t.075-1.038z");
}
</style><path class="j-gyshbnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:single-arrow-outline-rounded"} {...others} />);
}

export default Component;
