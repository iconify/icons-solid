import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xvmjcdhqi {
  fill: currentColor;
  d: path("m19.17 12l-3.88-3.88a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41l-2.88 2.88L17 14.17zM2.1 4.93l3.49 3.49l-2.88 2.88a.996.996 0 0 0 0 1.41L7.3 17.3a.996.996 0 1 0 1.41-1.41L4.83 12L7 9.83L19.07 21.9a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0c-.39.4-.39 1.03 0 1.42");
}
</style><path class="xvmjcdhqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-code-off"} {...others} />);
}

export default Component;
