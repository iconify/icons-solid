import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kupx_nb7i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.042 5.5c-5.406 0-10.459 3.3-11.327 7.4l-1.568 7.4c-.868 4.1 2.785 7.4 8.19 7.4h9.756c5.405 0 10.458-3.3 11.327-7.4l1.567-7.4c.869-4.1-2.784-7.4-8.19-7.4zm-1.459 7.4h9.537c1.367 0 2.234 1.1 1.945 2.467l-.523 2.466c-.29 1.367-1.622 2.467-2.989 2.467h-9.537c-1.366 0-2.234-1.1-1.944-2.467l.522-2.466c.29-1.367 1.623-2.467 2.99-2.467ZM8.58 27.7l-1.567 7.4c-.869 4.1 2.784 7.4 8.19 7.4h9.758c5.405 0 10.456-3.3 11.324-7.4H16.77c-5.406 0-9.059-3.3-8.19-7.4");
}
</style><path class="kupx_nb7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:e-bmkg"} {...others} />);
}

export default Component;
