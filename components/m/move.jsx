import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xjquafk-b {
  fill: var(--svg-color--6fe9b1, #6fe9b1);
  d: path("M3 12h3.484v6.968H3zm3.484 0h4.064v6.968h3.484V8.516H6.484zm7.548-6.968v3.484h3.484v10.452H21V5.032z");
}
</style><path class="xjquafk-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:move"} {...others} />);
}

export default Component;
