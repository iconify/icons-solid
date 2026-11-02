import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.id1wvccio {
  fill: currentColor;
  d: path("M13 5h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2m-9.293.293L6 7.586l2.293-2.293a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a.999.999 0 1 1 1.414-1.414M13 11h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2m-4.707 7.707L6 16.414l-2.293 2.293a.999.999 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3a.999.999 0 1 1-1.414 1.414M13 17h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2");
}
</style><path class="id1wvccio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-collapse-fill-sharp"} {...others} />);
}

export default Component;
