import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.xf78a_b-m {
  fill: var(--svg-color--4d5357, #4d5357);
  d: path("M56 2L18.8 42.9L8 34.7H2L18.8 62L62 2z");
}
</style><path class="xf78a_b-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:heavy-check-mark"} {...others} />);
}

export default Component;
