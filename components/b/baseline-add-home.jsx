import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a4tj93cqy {
  fill: currentColor;
  d: path("M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21z");
}

.v09tqpala {
  fill: currentColor;
  d: path("M18 11c.7 0 1.37.1 2 .29V9l-8-6l-8 6v12h7.68A6.995 6.995 0 0 1 18 11");
}
</style><path class="v09tqpala"/><path class="a4tj93cqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-add-home"} {...others} />);
}

export default Component;
