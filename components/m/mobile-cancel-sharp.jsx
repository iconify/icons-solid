import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yxqhu3fju {
  fill: currentColor;
  d: path("M9.65 15.75L12 13.425l2.325 2.325l1.425-1.4L13.4 12l2.35-2.325l-1.425-1.425L12 10.6L9.65 8.25l-1.4 1.425L10.575 12L8.25 14.35zM5 23V1h14v5.1h1v4.8h-1V23z");
}
</style><path class="yxqhu3fju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mobile-cancel-sharp"} {...others} />);
}

export default Component;
