import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":296};
const content = `<style>.dn-uczblj {
  fill: var(--svg-color--00ca8e, #00ca8e);
  d: path("M128.044 0L0 73.865v147.773l127.956 73.865L256 221.638V73.865zm57.123 162.582l-34.098 19.685l-41.217-22.542v47.105L71.14 231.393v-98.428l30.76-18.806l42.622 22.453V88.541l40.645-24.431z");
}
</style><path class="dn-uczblj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:nomad-icon"} {...others} />);
}

export default Component;
