import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t7lxhzbse {
  fill: currentColor;
  d: path("M20 3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2m0 14H4V5h16z");
}

.zo8yn6dto {
  fill: currentColor;
  d: path("M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z");
}
</style><path class="t7lxhzbse"/><path class="zo8yn6dto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-screenshot-monitor"} {...others} />);
}

export default Component;
