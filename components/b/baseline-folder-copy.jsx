import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.axj2oqj1c {
  fill: currentColor;
  d: path("M21 4h-7l-2-2H7c-1.1 0-1.99.9-1.99 2L5 15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2");
}

.hwzwy1bba {
  fill: currentColor;
  d: path("M3 6H1v13c0 1.1.9 2 2 2h17v-2H3z");
}
</style><path class="hwzwy1bba"/><path class="axj2oqj1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-folder-copy"} {...others} />);
}

export default Component;
