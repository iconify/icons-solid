import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.swe88mbkq {
  fill: currentColor;
  d: path("M13.97 4.363c-.974-.83-2.472-.137-2.472 1.142v3.988L5.47 4.363c-.974-.829-2.472-.136-2.472 1.143v12.993c0 .878.707 1.48 1.465 1.502h.087c.318-.01.64-.122.92-.36l6.028-5.13v3.987c0 1.279 1.498 1.971 2.472 1.142l7.41-6.306a1.75 1.75 0 0 0 0-2.665z");
}
</style><path class="swe88mbkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:fast-forward-24-filled"} {...others} />);
}

export default Component;
