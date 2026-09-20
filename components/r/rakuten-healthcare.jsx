import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.n7lyxvbqz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.221 35.235L24 40.6l10.105-9.38m2.628-2.44l1.063-.987c2.527-2.345 4.704-5.346 4.704-9.148c0-6.21-5.031-11.244-11.032-11.244c-2.848 0-5.478 1.134-7.468 2.99c-1.99-1.856-4.62-2.99-7.468-2.99C10.53 7.4 5.5 12.435 5.5 18.645c0 3.802 2.179 6.8 4.704 9.148l5.388 5.002");
}
</style><path class="n7lyxvbqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:rakuten-healthcare"} {...others} />);
}

export default Component;
