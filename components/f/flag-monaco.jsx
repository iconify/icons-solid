import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.byiqteejc {
  fill: var(--svg-color--eee, #eee);
  d: path("M0 18v9a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-9z");
}

.drwyycbim {
  fill: var(--svg-color--ce1126, #ce1126);
  d: path("M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4");
}
</style><path class="byiqteejc"/><path class="drwyycbim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:flag-monaco"} {...others} />);
}

export default Component;
