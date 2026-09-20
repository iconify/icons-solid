import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xrnrsx_7o {
  fill: currentColor;
  d: path("M208 57.38V32a8 8 0 0 0-16 0v25.38A24 24 0 0 0 176 80v42.21l-40-22.85V72a8 8 0 0 0-16 0v27.36l-40 22.85V80a24 24 0 0 0-16-22.62V32a8 8 0 0 0-16 0v25.38A24 24 0 0 0 32 80v136a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-40a16 16 0 0 1 32 0v40a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8V80a24 24 0 0 0-16-22.62M64 208H48v-96h16Zm144 0h-16v-96h16Z");
}
</style><path class="xrnrsx_7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:synagogue-fill"} {...others} />);
}

export default Component;
