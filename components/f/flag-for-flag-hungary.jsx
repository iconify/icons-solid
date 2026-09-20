import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.q2s76mbce {
  fill: var(--svg-color--436f4d, #436f4d);
  d: path("M4 31h28a4 4 0 0 0 4-4v-5H0v5a4 4 0 0 0 4 4");
}

.udphufz8o {
  fill: var(--svg-color--cd2a3e, #cd2a3e);
  d: path("M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4");
}

.zut58gbmm {
  fill: var(--svg-color--eee, #eee);
  d: path("M0 14h36v8H0z");
}
</style><path class="zut58gbmm"/><path class="udphufz8o"/><path class="q2s76mbce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:flag-for-flag-hungary"} {...others} />);
}

export default Component;
