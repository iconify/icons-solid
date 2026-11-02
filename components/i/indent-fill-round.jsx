import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d1fyoiblo {
  fill: currentColor;
  d: path("M12 5h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2M3.293 15.293L6.586 12L3.293 8.707a.999.999 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a.999.999 0 1 1-1.414-1.414M12 9h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2m0 4h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2m0 4h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2");
}
</style><path class="d1fyoiblo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:indent-fill-round"} {...others} />);
}

export default Component;
