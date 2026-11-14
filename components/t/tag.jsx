import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s20sqpbik {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.413 2.25H5.625q-1.398 0-2.386.989q-.989.988-.989 2.386v4.788q0 1.398.989 2.386l6.875 6.875q2.386 2.386 4.772 0l4.788-4.788q2.386-2.386 0-4.772l-6.875-6.875q-.988-.989-2.386-.989M5.5 7.75q0-2.25 2.25-2.25T10 7.75T7.75 10T5.5 7.75");
}
</style><path class="s20sqpbik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:tag"} {...others} />);
}

export default Component;
