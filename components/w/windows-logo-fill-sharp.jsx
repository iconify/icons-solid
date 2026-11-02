import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.umwmrmjbn {
  fill: currentColor;
  d: path("M22 11h-9V4.883l7.89-.877A1 1 0 0 1 22 5Zm-11 0H2V7a1 1 0 0 1 .89-.994L11 5.105Zm-9 2h9v5.895l-8.11-.901A1 1 0 0 1 2 17Zm11 0h9v6a1 1 0 0 1-1.11.994L13 19.117Z");
}
</style><path class="umwmrmjbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:windows-logo-fill-sharp"} {...others} />);
}

export default Component;
