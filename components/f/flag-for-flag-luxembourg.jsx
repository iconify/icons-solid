import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.icel-5blf {
  fill: var(--svg-color--ed2939, #ed2939);
  d: path("M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4");
}

.jyudtqbhp {
  fill: var(--svg-color--00a1de, #00a1de);
  d: path("M4 31h28a4 4 0 0 0 4-4v-5H0v5a4 4 0 0 0 4 4");
}

.zut58gbmm {
  fill: var(--svg-color--eee, #eee);
  d: path("M0 14h36v8H0z");
}
</style><path class="zut58gbmm"/><path class="icel-5blf"/><path class="jyudtqbhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:flag-for-flag-luxembourg"} {...others} />);
}

export default Component;
