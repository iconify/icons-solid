import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_si3tfrr.css';
import '../../css/e/edghc2bfh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary z_si3tfrr"/><path class="edghc2bfh primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flow-display-duo"} {...others} />);
}

export default Component;
