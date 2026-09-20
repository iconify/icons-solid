import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.i1sff3bfe {
  fill: currentColor;
  d: path("M8.5 6.75a.75.75 0 0 0-1.385-.398l-.048.076c-.214.341-.36.574-.575.811c-.225.247-.547.52-1.128.868a.75.75 0 1 0 .772 1.286c.34-.204.623-.397.864-.588v4.445a.75.75 0 0 0 1.5 0zm2.78 3.47a.75.75 0 1 0-1.06 1.06l.72.72l-.72.72a.75.75 0 1 0 1.06 1.06l.72-.72l.72.72a.75.75 0 1 0 1.06-1.06l-.72-.72l.72-.72a.75.75 0 0 0-1.06-1.06l-.72.72z");
}
</style><path class="i1sff3bfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:multiplier-1x-20-filled"} {...others} />);
}

export default Component;
