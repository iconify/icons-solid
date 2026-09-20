import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xdkz3hbaj {
  fill: currentColor;
  d: path("M4 17q-.825 0-1.412-.587T2 15V9q0-.825.588-1.412T4 7h5q.425 0 .713.288T10 8t-.288.713T9 9H4v6h4v-2H7q-.425 0-.712-.288T6 12t.288-.712T7 11h2q.425 0 .713.288T10 12v3q0 .825-.587 1.413T8 17zm8-1V8q0-.425.288-.712T13 7t.713.288T14 8v8q0 .425-.288.713T13 17t-.712-.288T12 16m4 0V8q0-.425.288-.712T17 7h5q.425 0 .713.288T23 8t-.288.713T22 9h-4v2h3q.425 0 .713.288T22 12t-.288.713T21 13h-3v3q0 .425-.288.713T17 17t-.712-.288T16 16");
}
</style><path class="xdkz3hbaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:gif-2-rounded"} {...others} />);
}

export default Component;
