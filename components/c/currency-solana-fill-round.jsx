import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u1a2jjbru {
  fill: currentColor;
  d: path("M20 5a1 1 0 0 1 .709 1.705l-.002.002L18.414 9H3.586l3.707-3.707l.001-.002C7.482 5.105 7.736 5 8 5ZM3 10h14.414l3.293 3.293l.002.002c.186.187.291.441.291.705H6.586l-3.295-3.294A1 1 0 0 1 3 10m2.586 5h14.828l-3.707 3.707l-.002.002A1 1 0 0 1 16 19H4a1 1 0 0 1-.709-1.705l.002-.002Z");
}
</style><path class="u1a2jjbru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:currency-solana-fill-round"} {...others} />);
}

export default Component;
