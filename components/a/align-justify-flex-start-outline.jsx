import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fwa4a0b9p {
  fill: currentColor;
  d: path("M3 21V3h1v18zm10.5-4.5v-9h2v9zm-6 0v-9h2v9z");
}
</style><path class="fwa4a0b9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-justify-flex-start-outline"} {...others} />);
}

export default Component;
