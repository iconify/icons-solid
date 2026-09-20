import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e5-kd2jkh {
  fill: var(--svg-color--f6ff0d, #f6ff0d);
  d: path("M10.64 9.272L14.236 3h3.595l-2.696 8.978H12.46l7.189 3.59L16.033 21l-5.392-6.313v4.473H4.35l2.156-7.182H4.351L7.046 3h3.595z");
}
</style><path class="e5-kd2jkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:katana"} {...others} />);
}

export default Component;
