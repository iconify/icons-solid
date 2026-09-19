import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbs0d2_4f {
  fill: currentColor;
  d: path("M19.1 17H22v-6c0-1.7-1.3-3-3-3h-9zm-.1-7c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-1-3V3H6v1.1L9 7zM1.2 1.8L0 3l4.9 5C3.3 8.1 2 9.4 2 11v6h4v4h11.9l3 3l1.3-1.3zM8 19v-5h2.9l5 5z");
}
</style><path class="dbs0d2_4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-print-disabled"} {...others} />);
}

export default Component;
