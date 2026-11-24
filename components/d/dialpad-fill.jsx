import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eqedirb-h {
  fill: currentColor;
  d: path("M6 3h.01a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2M6 8h.01a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2M6 13h.01a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2m-6 5h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2");
}
</style><path class="eqedirb-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:dialpad-fill"} {...others} />);
}

export default Component;
