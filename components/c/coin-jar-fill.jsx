import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xmb828b-l {
  fill: currentColor;
  d: path("M5 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m7 2a3 3 0 1 1 6 0a3 3 0 0 1-6 0m5 6v.586l.707.707C18.422 15.008 19 15.961 19 17v2a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-2c0-1.039.578-1.992 1.293-2.707L7 13.586V13a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2");
}
</style><path class="xmb828b-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:coin-jar-fill"} {...others} />);
}

export default Component;
