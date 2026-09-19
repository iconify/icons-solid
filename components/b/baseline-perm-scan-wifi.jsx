import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xoqkg3b8b {
  fill: currentColor;
  d: path("M12 3C6.95 3 3.15 4.85 0 7.23L12 22L24 7.25C20.85 4.87 17.05 3 12 3m1 13h-2v-6h2zm-2-8V6h2v2z");
}
</style><path class="xoqkg3b8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-perm-scan-wifi"} {...others} />);
}

export default Component;
