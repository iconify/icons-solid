import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_5-m_blk.css';
import '../../css/r/rjoq2cbhl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i_5-m_blk"/><path class="rjoq2cbhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rocket-20"} {...others} />);
}

export default Component;
