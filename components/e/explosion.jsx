import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dyuckl2xu {
  fill: currentColor;
  d: path("m12 16.648l1.378-1.378h1.892v-1.892L16.648 12l-1.378-1.378V8.73h-1.892L12 7.352L10.622 8.73H8.73v1.892L7.352 12l1.378 1.378v1.892h1.892zm0 5.268L9.069 19H5v-4.069L2.085 12L5 9.069V5h4.069L12 2.085L14.931 5H19v4.069L21.916 12L19 14.931V19h-4.069z");
}
</style><path class="dyuckl2xu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:explosion"} {...others} />);
}

export default Component;
