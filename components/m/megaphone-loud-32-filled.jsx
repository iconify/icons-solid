import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.prdcsvzge {
  fill: currentColor;
  d: path("M20.725 5.988a1 1 0 0 1-.686-1.237l.827-2.884a1 1 0 1 1 1.922.551l-.826 2.884a1 1 0 0 1-1.237.686m7.982-2.695a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0m-7.114 19.125l4.75-2.375a3 3 0 0 0 .779-4.804l-10.36-10.36a3 3 0 0 0-4.805.78l-8.64 17.279A3 3 0 0 0 3.88 26.4l1.72 1.72a3 3 0 0 0 3.463.562l2.717-1.359a5.5 5.5 0 0 0 9.813-4.906m-1.798.899a3.5 3.5 0 0 1-6.218 3.109zM27 10.002a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2z");
}
</style><path class="prdcsvzge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:megaphone-loud-32-filled"} {...others} />);
}

export default Component;
