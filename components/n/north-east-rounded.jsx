import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vlij0w_nl {
  fill: currentColor;
  d: path("M17 8.4L6.1 19.3q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L15.6 7H10q-.425 0-.712-.288T9 6t.288-.712T10 5h8q.425 0 .713.288T19 6v8q0 .425-.288.713T18 15t-.712-.288T17 14z");
}
</style><path class="vlij0w_nl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:north-east-rounded"} {...others} />);
}

export default Component;
