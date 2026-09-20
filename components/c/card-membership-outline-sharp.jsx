import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zrqp7bcpo {
  fill: currentColor;
  d: path("M4 15h16v-2.423H4zm5.077 5.27V16H3V3h18v13h-6.077v4.27L12 18.807zM4 10.422h16V4H4zM4 15V4z");
}
</style><path class="zrqp7bcpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:card-membership-outline-sharp"} {...others} />);
}

export default Component;
