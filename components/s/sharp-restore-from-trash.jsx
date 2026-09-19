import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xjoh4447g {
  fill: currentColor;
  d: path("M6 21h12V7H6zm6-11l4 4h-2v4h-4v-4H8zm3.5-6l-1-1h-5l-1 1H5v2h14V4z");
}
</style><path class="xjoh4447g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-restore-from-trash"} {...others} />);
}

export default Component;
