import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x0mkzccff {
  fill: currentColor;
  d: path("M4 15q-.425 0-.712-.288T3 14v-1h1.5v.5h2v-1H4q-.425 0-.712-.288T3 11.5V10q0-.425.288-.712T4 9h3q.425 0 .713.288T8 10v1H6.5v-.5h-2v1H7q.425 0 .713.288T8 12.5V14q0 .425-.288.713T7 15zm7.75 1.5V15H11q-.425 0-.712-.288T10 14v-4q0-.425.288-.712T11 9h3q.425 0 .713.288T15 10v4q0 .425-.288.713T14 15h-.75v1.5zm-.25-3h2v-3h-2zM17 9h1.5v4.5H21V15h-4z");
}
</style><path class="x0mkzccff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sql"} {...others} />);
}

export default Component;
