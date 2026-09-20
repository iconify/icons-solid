import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o8750-_fk {
  fill: currentColor;
  d: path("M5 5q-.425 0-.712-.288T4 4t.288-.712T5 3h14q.425 0 .713.288T20 4t-.288.713T19 5z");
}
</style><path class="o8750-_fk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:maximize-outline-rounded"} {...others} />);
}

export default Component;
