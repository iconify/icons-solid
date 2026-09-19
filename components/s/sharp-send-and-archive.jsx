import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qbu-svbzn {
  fill: currentColor;
  d: path("M17 10c.1 0 .19.01.28.01L3 4v6l8 2l-8 2v6l7-2.95V17c0-3.87 3.13-7 7-7");
}

.urngxsyqt {
  fill: currentColor;
  d: path("M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m0 8l-3-3h2.5v-3h1v3H20z");
}
</style><path class="qbu-svbzn"/><path class="urngxsyqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-send-and-archive"} {...others} />);
}

export default Component;
