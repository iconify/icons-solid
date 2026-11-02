import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z2qkh7b8f {
  fill: currentColor;
  d: path("M3.707 5.293L5 6.586l3.293-3.293a.999.999 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414M13 5h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2m-9.293 6.293L5 12.586l3.293-3.293a.999.999 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414M13 11h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2m-9.293 6.293L5 18.586l3.293-3.293a.999.999 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414M13 17h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2");
}
</style><path class="z2qkh7b8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-checklist-fill"} {...others} />);
}

export default Component;
