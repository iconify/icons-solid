import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/icc3yibbv.css';
import '../../css/w/wjxfq7fak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="icc3yibbv"/><path class="wjxfq7fak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:arrange-letter"} {...others} />);
}

export default Component;
