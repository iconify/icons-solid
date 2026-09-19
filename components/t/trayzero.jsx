import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wn9pf-eat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.037 31.147c-.948-7.486-7.339-13.274-15.082-13.274S9.822 23.661 8.874 31.147m33.51 0c-.964-9.327-8.847-16.6-18.429-16.6s-17.464 7.273-18.43 16.6m6.713 0c.911-5.638 5.82-9.943 11.72-9.943s10.807 4.305 11.718 9.942M3.5 33.453h41");
}
</style><path class="wn9pf-eat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:trayzero"} {...others} />);
}

export default Component;
