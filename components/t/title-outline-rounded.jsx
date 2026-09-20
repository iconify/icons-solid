import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e1_nopbic {
  fill: currentColor;
  d: path("M11.385 6.25h-4.75q-.257 0-.436-.18q-.18-.18-.18-.438q0-.257.18-.444T6.635 5h10.75q.256 0 .436.18q.179.18.179.438q0 .257-.18.444t-.435.188h-4.75v12.135q0 .256-.18.436q-.18.179-.438.179q-.257 0-.445-.185q-.187-.185-.187-.45z");
}
</style><path class="e1_nopbic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:title-outline-rounded"} {...others} />);
}

export default Component;
