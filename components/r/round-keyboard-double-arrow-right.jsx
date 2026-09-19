import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ohe_pdb6w {
  fill: currentColor;
  d: path("M5.7 6.71a.996.996 0 0 0 0 1.41L9.58 12L5.7 15.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L7.12 6.71c-.39-.39-1.03-.39-1.42 0");
}

.szucpmkbt {
  fill: currentColor;
  d: path("M12.29 6.71a.996.996 0 0 0 0 1.41L16.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L13.7 6.7c-.38-.38-1.02-.38-1.41.01");
}
</style><path class="ohe_pdb6w"/><path class="szucpmkbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-keyboard-double-arrow-right"} {...others} />);
}

export default Component;
