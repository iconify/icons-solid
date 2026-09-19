import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mvcif148g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.468 36.31h-3.406a3.676 3.676 0 0 1-3.66-3.343l-.525-5.76a1.733 1.733 0 0 1 1.726-1.89h8.323c1.02 0 1.819.875 1.726 1.89l-.524 5.76a3.676 3.676 0 0 1-3.66 3.343m.278 0c0 3.11-.878 5.52-1.767 7.764h-3.85l.176-.443c.916-2.31 1.863-4.486 1.863-7.32m4.538-11.005v-5.804m-5.882 0v5.804");
}

.q0sow6whe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.103 35.054c-10.899 3.276-12.501 3.202-12.501 3.202C25.891 16.85 3.243 3.935 3.243 3.935s25.637 2.78 41.514 18.903c0 0-3.6 4.567-11.479 8.48");
}
</style><path class="q0sow6whe"/><path class="mvcif148g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:charging-manager"} {...others} />);
}

export default Component;
