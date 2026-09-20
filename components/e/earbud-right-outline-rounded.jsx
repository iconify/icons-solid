import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hq7kfdcxj {
  fill: currentColor;
  d: path("M12 12h-2v-2h3q.425 0 .713.288T14 11v9h2v-9q0-.425.288-.712T17 10h2V6h-9V4h9q.825 0 1.413.588T21 6v4q0 .825-.587 1.413T19 12h-1v8q0 .825-.587 1.413T16 22h-2q-.825 0-1.412-.587T12 20zM4.75 3.75Q6.5 2 9 2q.425 0 .713.288T10 3v10q0 .425-.288.713T9 14q-2.5 0-4.25-1.75T3 8t1.75-4.25m1.075 6.7Q6.65 11.525 8 11.875v-7.75q-1.35.35-2.175 1.425T5 8t.825 2.45M8 8");
}
</style><path class="hq7kfdcxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:earbud-right-outline-rounded"} {...others} />);
}

export default Component;
