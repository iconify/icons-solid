import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tlftnbcle {
  fill: currentColor;
  d: path("M14.01 2a1 1 0 0 1 0 2H14a1 1 0 0 1 0-2Zm-4 1a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2ZM3.757 8.03l16-4a1 1 0 0 1 .486 1.94L13 7.781V12h7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h7V8.281L4.243 9.97a1 1 0 0 1-.486-1.94M5 14v2h3v-2Zm5 0v2h4v-2Zm6 2h3v-2h-3Z");
}
</style><path class="tlftnbcle"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cable-car-alt-fill-sharp"} {...others} />);
}

export default Component;
