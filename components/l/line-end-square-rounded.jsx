import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kng716jqm {
  fill: currentColor;
  d: path("M12 17.5q-.425 0-.712-.288T11 16.5V13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h8V7.5q0-.425.288-.712T12 6.5h9q.425 0 .713.288T22 7.5v9q0 .425-.288.713T21 17.5z");
}
</style><path class="kng716jqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-end-square-rounded"} {...others} />);
}

export default Component;
