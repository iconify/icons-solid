import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h5tlkubht {
  fill: currentColor;
  d: path("M19 1H5v22h14zm-2 17H7V6h10zm-9-8h8v1.5H8zm1 3h6v1.5H9z");
}
</style><path class="h5tlkubht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-aod"} {...others} />);
}

export default Component;
