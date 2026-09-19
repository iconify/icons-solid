import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vksdqacuh {
  fill: currentColor;
  d: path("M17 11v2h-1.46l4.68 4.68A9.9 9.9 0 0 0 22 12c0-5.52-4.48-10-10-10c-2.11 0-4.07.66-5.68 1.78L13.54 11zM2.27 2.27L1 3.54l2.78 2.78A9.9 9.9 0 0 0 2 12c0 5.52 4.48 10 10 10c2.11 0 4.07-.66 5.68-1.78L20.46 23l1.27-1.27L11 11zM7 13v-2h1.46l2 2z");
}
</style><path class="vksdqacuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-do-not-disturb-off"} {...others} />);
}

export default Component;
