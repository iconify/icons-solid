import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fj9otzk7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.79 28.685a8.58 8.58 0 0 0 8.618 8.617A8.64 8.64 0 0 0 24 32.788a8.64 8.64 0 0 0 7.592 4.514a8.58 8.58 0 0 0 8.618-8.617c0-2.052-.684-3.898-1.915-5.403h0L24 5.5L9.705 23.282h0c-1.231 1.436-1.915 3.351-1.915 5.403");
}

.hxcwhwy_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.326 35.592c.547 2.462 3.693 6.36 4.993 6.908H16.68c1.3-.547 4.515-4.514 4.993-6.908");
}
</style><path class="hxcwhwy_p"/><path class="fj9otzk7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-black-spade-suit"} {...others} />);
}

export default Component;
