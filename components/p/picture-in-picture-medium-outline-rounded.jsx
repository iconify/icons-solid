import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lxehksbrf {
  fill: currentColor;
  d: path("M9 16q-.425 0-.712-.288T8 15V9q0-.425.288-.712T9 8h8q.425 0 .713.288T18 9v6q0 .425-.288.713T17 16zm-6 4q-.425 0-.712-.288T2 19t.288-.712T3 18h17V5q0-.425.288-.712T21 4t.713.288T22 5v13q0 .825-.587 1.413T20 20z");
}
</style><path class="lxehksbrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:picture-in-picture-medium-outline-rounded"} {...others} />);
}

export default Component;
