import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ttcp0zbju {
  fill: var(--svg-color--fff, #fff);
  d: path("M4.5 3h2.4v13.2H4.5zm4.8 15.6H6.9v-2.4h2.4zm2.4 0V21H9.3v-2.4zm0 0v-2.4h2.4v2.4zm3-15.6h2.4v10.8h-2.4zm2.4 10.8h2.4v2.4h-2.4z");
}
</style><path class="ttcp0zbju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:vega"} {...others} />);
}

export default Component;
