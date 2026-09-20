import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/loa53obtg.css';
import '../../css/k/kxhuiabhg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="loa53obtg"/><path class="kxhuiabhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:redo"} {...others} />);
}

export default Component;
