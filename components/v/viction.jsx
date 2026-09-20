import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wky0-1b3a {
  fill: var(--svg-color--f8f6d7, #f8f6d7);
  d: path("M21 3v7.788a36.4 36.4 0 0 1-9 1.123c-3.108 0-6.124-.39-9-1.123V3a36.4 36.4 0 0 0 9 1.123c3.108 0 6.124-.39 9-1.123M3 21v-7.788a36.4 36.4 0 0 1 9-1.123c3.108 0 6.124.39 9 1.123V21a36.4 36.4 0 0 0-9-1.123c-3.108 0-6.124.39-9 1.123");
}
</style><path class="wky0-1b3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:viction"} {...others} />);
}

export default Component;
