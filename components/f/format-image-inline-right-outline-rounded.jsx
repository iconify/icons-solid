import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rcjv7l0qj {
  fill: currentColor;
  d: path("M11 16V8q0-.425.288-.712T12 7h8q.425 0 .713.288T21 8v8q0 .425-.288.713T20 17h-8q-.425 0-.712-.288T11 16m2-1h6V9h-6zm-9 2q-.425 0-.712-.288T3 16t.288-.712T4 15h4q.425 0 .713.288T9 16t-.288.713T8 17zm0 4q-.425 0-.712-.288T3 20t.288-.712T4 19h16q.425 0 .713.288T21 20t-.288.713T20 21zM4 5q-.425 0-.712-.288T3 4t.288-.712T4 3h16q.425 0 .713.288T21 4t-.288.713T20 5z");
}
</style><path class="rcjv7l0qj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-image-inline-right-outline-rounded"} {...others} />);
}

export default Component;
