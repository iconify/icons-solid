import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ma3j3nbks {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14zm8 4l-1.7 6.8q-.125.45.175.825t.775.375q.35 0 .6-.2t.325-.525L14.95 9.25q.05-.125.05-.225V8.8q0-.725-.512-1.262T13.25 7H10q-.425 0-.712.288T9 8t.288.713T10 9z");
}
</style><path class="ma3j3nbks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:looks-7-outline-rounded"} {...others} />);
}

export default Component;
