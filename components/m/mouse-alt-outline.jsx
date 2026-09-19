import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iimgyyl1w.css';
import '../../css/d/dta0--2ub.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iimgyyl1w"/><path clip-rule="evenodd" class="dta0--2ub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:mouse-alt-outline"} {...others} />);
}

export default Component;
