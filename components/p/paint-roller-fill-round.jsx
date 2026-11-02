import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.me0thpmkj {
  fill: currentColor;
  d: path("M6 2h8a4.006 4.006 0 0 1 3.874 3H18a4 4 0 0 1 0 8h-3c-.806 0-1.535.487-1.847 1.23A3 3 0 0 1 15 17v2a3 3 0 1 1-6 0v-2c0-1.306.848-2.464 2.092-2.86A4.01 4.01 0 0 1 15 11h3a2 2 0 1 0 0-4h-.126A4.01 4.01 0 0 1 14 10H6a4 4 0 0 1 0-8");
}
</style><path class="me0thpmkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:paint-roller-fill-round"} {...others} />);
}

export default Component;
