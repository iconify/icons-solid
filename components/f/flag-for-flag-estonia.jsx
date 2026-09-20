import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.fkagtxbpe {
  fill: var(--svg-color--eee, #eee);
  d: path("M32 31H4a4 4 0 0 1-4-4v-4h36v4a4 4 0 0 1-4 4");
}

.ko78l5bky {
  fill: var(--svg-color--4891d9, #4891d9);
  d: path("M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4");
}

.q7bn-mlfe {
  fill: var(--svg-color--141414, #141414);
  d: path("M0 14h36v9H0z");
}
</style><path class="q7bn-mlfe"/><path class="ko78l5bky"/><path class="fkagtxbpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:flag-for-flag-estonia"} {...others} />);
}

export default Component;
