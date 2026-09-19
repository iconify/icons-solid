import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.c700cvb5n {
  fill: var(--svg-color--4d5357, #4d5357);
  d: path("M2 26h60v12H2z");
}
</style><path class="c700cvb5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:minus"} {...others} />);
}

export default Component;
