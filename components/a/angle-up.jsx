import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.b7yw7z1gn {
  d: path("m15.36 13.268l-6-5c-1.025-.853.256-2.39 1.28-1.536l6 5c1.024.853-.256 2.39-1.28 1.536");
}

.bkdjfsbgo {
  d: path("m3.36 11.732l6-5c1.024-.854 2.305.683 1.28 1.536l-6 5c-1.024.854-2.305-.683-1.28-1.536");
}

.cuyn6tgcc {
  fill: currentColor;
}
</style><g class="cuyn6tgcc"><path class="b7yw7z1gn"/><path class="bkdjfsbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:angle-up"} {...others} />);
}

export default Component;
