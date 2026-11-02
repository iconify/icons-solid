import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m_p24pbfh {
  fill: currentColor;
  d: path("m12 10.113l4.152-6.643a.998.998 0 0 1 1.731.061a1 1 0 0 1-.035.999L13 12.287V20a1 1 0 0 1-2 0v-7.713L6.152 4.53a1 1 0 0 1 1.696-1.06Z");
}
</style><path class="m_p24pbfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-y-bulk-round"} {...others} />);
}

export default Component;
