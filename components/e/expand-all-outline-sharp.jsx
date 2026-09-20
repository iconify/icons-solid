import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o8qdjqbdn {
  fill: currentColor;
  d: path("m12 22l-6-6l1.425-1.425L12 19.15l4.575-4.575L18 16zM7.45 9.4L6 8l6-6l6 6l-1.45 1.4L12 4.85z");
}
</style><path class="o8qdjqbdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:expand-all-outline-sharp"} {...others} />);
}

export default Component;
