import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o5h_8f7bc {
  fill: currentColor;
  d: path("M20 11.476V19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7.524l-.322.286a1 1 0 0 1-1.412-.083l-.013-.015a1 1 0 0 1 .083-1.411l2-1.778v-.001l5.671-5.04a3 3 0 0 1 3.986 0l7.671 6.819a1 1 0 0 1 .334.688a1 1 0 0 1-.251.723l-.013.015a1 1 0 0 1-1.412.083ZM14 18a2 2 0 0 0 2-2v-3.884c0-.572-.244-1.116-.671-1.495l-2-1.778a2 2 0 0 0-2.658 0l-2 1.778A2 2 0 0 0 8 12.116V16a2 2 0 0 0 2 2Z");
}
</style><path class="o5h_8f7bc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-alt-4-fill"} {...others} />);
}

export default Component;
