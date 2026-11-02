import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cde73hblb {
  fill: currentColor;
  d: path("M16.41 4.456A2.999 2.999 0 0 1 21 7v10a3 3 0 0 1-4.59 2.544l-8-5a3 3 0 0 1 0-5.088ZM5 19a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Z");
}
</style><path class="cde73hblb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:skip-back-fill"} {...others} />);
}

export default Component;
