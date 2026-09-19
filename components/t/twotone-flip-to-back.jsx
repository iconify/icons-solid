import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x_1xkhbwe {
  fill: currentColor;
  d: path("M9 7H7v2h2zm0 4H7v2h2zm0-8a2 2 0 0 0-2 2h2zm4 12h-2v2h2zm6-12v2h2c0-1.1-.9-2-2-2m-6 0h-2v2h2zM9 17v-2H7a2 2 0 0 0 2 2m10-4h2v-2h-2zm0-4h2V7h-2zm0 8c1.1 0 2-.9 2-2h-2zM5 7H3v12a2 2 0 0 0 2 2h12v-2H5zm10-2h2V3h-2zm0 12h2v-2h-2z");
}
</style><path class="x_1xkhbwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-flip-to-back"} {...others} />);
}

export default Component;
