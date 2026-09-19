import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e2em50b9t {
  fill: currentColor;
  d: path("M19 6v10.5l1.95 1.95c.03-.15.05-.3.05-.45V6c0-1.1-.9-2-2-2H6.5l2 2zM3.86 3.95a.9.9 0 0 0-1.27 0a.9.9 0 0 0 0 1.27l.41.42V18c0 1.1.9 2 2 2h12.36l1.42 1.42a.9.9 0 0 0 1.27 0a.9.9 0 0 0 0-1.27zM5 18V7.64L15.36 18z");
}
</style><path class="e2em50b9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-browser-not-supported"} {...others} />);
}

export default Component;
