import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r904akbfl {
  fill: currentColor;
  d: path("M2 20V4h2v16zm18 0V4h2v16zM7.35 17L11.1 7h1.8l3.75 10h-1.725l-.9-2.55h-4.05l-.9 2.55zm3.15-4h3l-1.45-4.15h-.1z");
}
</style><path class="r904akbfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-letter-spacing-wider-outline-sharp"} {...others} />);
}

export default Component;
