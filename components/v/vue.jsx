import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":221};
const content = `<style>.gpbvbidrc {
  fill: var(--svg-color--41b883, #41b883);
  d: path("m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0z");
}

.jjet8kudg {
  fill: var(--svg-color--35495e, #35495e);
  d: path("M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0z");
}

.z792yubyf {
  fill: var(--svg-color--41b883, #41b883);
  d: path("M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0z");
}
</style><path class="z792yubyf"/><path class="gpbvbidrc"/><path class="jjet8kudg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:vue"} {...others} />);
}

export default Component;
