import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cstoxz1iy {
  fill: currentColor;
  d: path("m18 16l4-4l-4-4v3h-5.06A8.97 8.97 0 0 0 8 3.95A3.005 3.005 0 0 0 5 1C3.34 1 2 2.34 2 4s1.34 3 3 3c.95 0 1.78-.45 2.33-1.14C9.23 6.9 10.6 8.77 10.92 11h-3.1C7.4 9.84 6.3 9 5 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c1.3 0 2.4-.84 2.82-2h3.1c-.32 2.23-1.69 4.1-3.58 5.14C6.78 17.45 5.95 17 5 17c-1.66 0-3 1.34-3 3s1.34 3 3 3a2.99 2.99 0 0 0 2.99-2.95A8.97 8.97 0 0 0 12.93 13H18z");
}
</style><path class="cstoxz1iy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-mediation"} {...others} />);
}

export default Component;
