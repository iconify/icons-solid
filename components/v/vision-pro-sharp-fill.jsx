import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.chzbq8n6j {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7 6L17 6C20.3137 6 23 8.6863 23 12C23 15.3137 20.3137 18 17 18L15.39 18C15.0548 18 14.7419 17.8321 14.5566 17.5528L13.0734 15.3166L10.9266 15.3166L9.4434 17.5528C9.2581 17.8321 8.9452 18 8.61 18L7 18C3.6863 18 1 15.3137 1 12C1 8.6863 3.6863 6 7 6Z");
}
</style><path clip-rule="evenodd" class="chzbq8n6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:vision-pro-sharp-fill"} {...others} />);
}

export default Component;
