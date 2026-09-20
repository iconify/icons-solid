import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jrk2339pe {
  fill: currentColor;
  d: path("M4 17q-.425 0-.712-.288T3 16V8q0-.425.288-.712T4 7h8q.425 0 .713.288T13 8v8q0 .425-.288.713T12 17zM4 5q-.425 0-.712-.288T3 4t.288-.712T4 3h16q.425 0 .713.288T21 4t-.288.713T20 5zm12 4q-.425 0-.712-.288T15 8t.288-.712T16 7h4q.425 0 .713.288T21 8t-.288.713T20 9zm0 4q-.425 0-.712-.288T15 12t.288-.712T16 11h4q.425 0 .713.288T21 12t-.288.713T20 13zm0 4q-.425 0-.712-.288T15 16t.288-.712T16 15h4q.425 0 .713.288T21 16t-.288.713T20 17zM4 21q-.425 0-.712-.288T3 20t.288-.712T4 19h16q.425 0 .713.288T21 20t-.288.713T20 21z");
}
</style><path class="jrk2339pe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-image-left-rounded"} {...others} />);
}

export default Component;
