import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m0e2xabce {
  fill: currentColor;
  d: path("M4 21q-.425 0-.712-.288T3 20t.288-.712T4 19h16q.425 0 .713.288T21 20t-.288.713T20 21zm-1-5V8q0-.425.288-.712T4 7h8q.425 0 .713.288T13 8v8q0 .425-.288.713T12 17H4q-.425 0-.712-.288T3 16m2-1h6V9H5zM4 5q-.425 0-.712-.288T3 4t.288-.712T4 3h16q.425 0 .713.288T21 4t-.288.713T20 5zm4 7");
}
</style><path class="m0e2xabce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-image-break-left-outline-rounded"} {...others} />);
}

export default Component;
