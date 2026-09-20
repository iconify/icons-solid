import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x-mcczlzs {
  fill: currentColor;
  d: path("M12 9v7q0 .425.288.713T13 17t.713-.288T14 16V8q0-.425-.288-.712T13 7h-2q-.425 0-.712.288T10 8t.288.713T11 9zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z");
}
</style><path class="x-mcczlzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:looks-one-rounded"} {...others} />);
}

export default Component;
