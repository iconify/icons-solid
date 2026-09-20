import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j39aatrme {
  fill: currentColor;
  d: path("m12 19.83l4.246-4.24q.14-.14.342-.152t.366.153q.16.159.16.353t-.16.354l-4.221 4.221q-.306.306-.733.306t-.733-.306l-4.22-4.221q-.141-.14-.154-.341t.153-.367q.16-.16.354-.16t.354.16zm0-5.95l4.246-4.24q.14-.14.342-.152t.366.153q.16.159.16.353t-.16.354l-4.221 4.221q-.306.306-.733.306t-.733-.306l-4.22-4.221q-.141-.14-.154-.341t.153-.366q.16-.16.354-.16t.354.16zm0-5.95l4.246-4.24q.14-.14.342-.152t.366.153q.16.159.16.353t-.16.354l-4.221 4.221q-.306.306-.733.306t-.733-.306l-4.22-4.221q-.141-.14-.154-.341t.153-.367q.16-.16.354-.16t.354.16z");
}
</style><path class="j39aatrme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stat-minus-3-rounded"} {...others} />);
}

export default Component;
