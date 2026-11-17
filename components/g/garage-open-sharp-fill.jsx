import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b80qhjaia {
  d: path("M11.66 1.06C11.916 0.967 12.201 0.982 12.447 1.105L22.236 6H1.764L11.553 1.105L11.66 1.06Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.m7w2w9bav {
  fill-rule: evenodd;
  d: path("M23 22C23 22.552 22.552 23 22 23H2C1.448 23 1 22.552 1 22V8H23V22ZM6 21H18V11H6V21Z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="m7w2w9bav"/><path class="b80qhjaia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:garage-open-sharp-fill"} {...others} />);
}

export default Component;
