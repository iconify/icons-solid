import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.w-6xh7kfg {
  fill: currentColor;
  d: path("M250.82 170.8A12 12 0 0 0 240 164h-92v-16h68a12 12 0 0 0 8.88-20.07L148 43.36V12a12 12 0 0 0-21.19-7.71l-104 124A12 12 0 0 0 32 148h92v16H16a12 12 0 0 0-9.37 19.5l29.6 37a19.9 19.9 0 0 0 15.61 7.5h152.32a19.9 19.9 0 0 0 15.61-7.51l29.6-37a12 12 0 0 0 1.45-12.69M188.87 124H148V79Zm-131.14 0L124 45v79Zm144.5 80H53.77L41 188h174Z");
}
</style><path class="w-6xh7kfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:sailboat-bold"} {...others} />);
}

export default Component;
