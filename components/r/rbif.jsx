import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y4yx2dbce {
  fill: var(--svg-color--0095f1, #0095f1);
  d: path("M5.813 21h5.062V3H9.61c.18 4.871-.337 15.294-3.796 18m12.375 0h-5.063V3h1.266c-.18 4.871.337 15.294 3.797 18");
}
</style><path class="y4yx2dbce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:rbif"} {...others} />);
}

export default Component;
