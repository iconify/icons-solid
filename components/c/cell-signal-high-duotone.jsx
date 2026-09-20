import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.a8ab7i8-f {
  d: path("M160 60.7V208H32a8 8 0 0 1-5.66-13.66Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.s_lt-3iwq {
  d: path("M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M152 80v120H32Zm40 120h-24V64l24-24Z");
}
</style><g class="cuyn6tgcc"><path class="a8ab7i8-f"/><path class="s_lt-3iwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cell-signal-high-duotone"} {...others} />);
}

export default Component;
