import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b6aozgbpa {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M19.2 4.8H4.8v14.4h13.128l-3-3H7.8V7.8h8.4v7.128l3 3zM3 3v18h18V3zm6.6 6.6h4.8v4.8H9.6z");
}
</style><path clip-rule="evenodd" class="b6aozgbpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:quad"} {...others} />);
}

export default Component;
