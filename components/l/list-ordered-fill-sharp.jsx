import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z3ewftbij {
  fill: currentColor;
  d: path("m3.293 5.293l2-2A1 1 0 0 1 7 4v6a1 1 0 0 1-2 0V6.414l-.293.293a.999.999 0 1 1-1.414-1.414M12 6h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2m0 5h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2m-3.293 5.707L6.414 19H8a1 1 0 0 1 0 2H4a1.002 1.002 0 0 1-.707-1.707l3.646-3.646A1.002 1.002 0 0 0 5 16a1 1 0 0 1-2 0a3.001 3.001 0 0 1 6 0c0 .265-.105.52-.293.707M12 16h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2");
}
</style><path class="z3ewftbij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-ordered-fill-sharp"} {...others} />);
}

export default Component;
