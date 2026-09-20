import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dcfvscbex {
  fill: currentColor;
  d: path("M4.975 15q-.425 0-.7-.288T4 14t.288-.712T5 13h14.025q.425 0 .7.288T20 14t-.288.713T19 15zm0 4q-.425 0-.7-.288T4 18t.288-.712T5 17h14.025q.425 0 .7.288T20 18t-.288.713T19 19zm0-8q-.425 0-.7-.288T4 10t.288-.712T5 9h14.025q.425 0 .7.288T20 10t-.288.713T19 11zm0-4q-.425 0-.7-.288T4 6t.288-.712T5 5h14.025q.425 0 .7.288T20 6t-.288.713T19 7z");
}
</style><path class="dcfvscbex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-headline-outline-rounded"} {...others} />);
}

export default Component;
