import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbu1mdbbp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kbu1mdbbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:unfold-horizontal-dashed"} {...others} />);
}

export default Component;
