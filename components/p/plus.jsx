import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.m_-w-djsn {
  fill: currentColor;
  d: path("M38 26V2H26v24H2v12h24v24h12V38h24V26z");
}
</style><path class="m_-w-djsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:plus"} {...others} />);
}

export default Component;
