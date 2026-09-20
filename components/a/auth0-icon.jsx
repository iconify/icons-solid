import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":285};
const content = `<style>.d1v150qky {
  d: path("M220.412 0h-92.415l28.562 89.006h92.416l-74.77 53.077l28.57 89.511c48.128-35.06 63.854-88.12 46.208-142.588zM7.018 89.006h92.416L127.997 0H35.589zc-17.655 54.468-1.92 107.529 46.207 142.588l28.563-89.51zm46.208 142.588l74.77 52.97l74.77-52.97l-74.77-53.847z");
}
</style><path class="d1v150qky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:auth0-icon"} {...others} />);
}

export default Component;
