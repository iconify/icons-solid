import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.j37us9hup {
  fill: var(--svg-color--eee, #eee);
  d: path("M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4");
}

.rviwuksrz {
  fill: var(--svg-color--22408c, #22408c);
  d: path("M0 13h36v10H0z");
}

.s20544kmx {
  fill: var(--svg-color--ce2028, #ce2028);
  d: path("M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-4h36z");
}
</style><path class="s20544kmx"/><path class="rviwuksrz"/><path class="j37us9hup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:flag-for-flag-russia"} {...others} />);
}

export default Component;
