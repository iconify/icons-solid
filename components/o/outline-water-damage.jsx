import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.levvep35i {
  fill: currentColor;
  d: path("M12 3L2 12h3v8h14v-8h3zM7 18v-7.81l5-4.5l5 4.5V18zm7-4c0 1.1-.9 2-2 2s-2-.9-2-2s2-4 2-4s2 2.9 2 4");
}
</style><path class="levvep35i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-water-damage"} {...others} />);
}

export default Component;
