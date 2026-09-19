import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fntodxa3b {
  fill: currentColor;
  d: path("M2 4a2 2 0 0 1 2-2h10v2H4v10H2z");
}

.j0jf3tcwu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17 6H8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11c1.1 0 2-.9 2-2v-9zM8 8h7v3H8zm5.5 11a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5");
}
</style><path clip-rule="evenodd" class="j0jf3tcwu"/><path class="fntodxa3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-save-all"} {...others} />);
}

export default Component;
