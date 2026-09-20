import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ak-d-cchm {
  fill: currentColor;
  d: path("M10 5.487a1 1 0 0 0-1.591-.806l-5.88 4.311a1.25 1.25 0 0 0 0 2.016l5.88 4.312A1 1 0 0 0 10 14.514v-3.16l5.409 3.966A1 1 0 0 0 17 14.514V5.487a1 1 0 0 0-1.591-.806L10 8.647zM3.12 9.8L9 5.487v9.027l-5.88-4.312a.25.25 0 0 1 0-.403m7 0L16 5.487v9.027l-5.88-4.312a.25.25 0 0 1 0-.403");
}
</style><path class="ak-d-cchm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:rewind-20-regular"} {...others} />);
}

export default Component;
