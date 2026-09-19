import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntlbgtbho.css';
import '../../css/f/f-ksdqydc.css';
import '../../css/j/j5z--zobz.css';
import '../../css/t/tffiggcyh.css';
import '../../css/g/guadj6bsg.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="ntlbgtbho"/><circle class="f-ksdqydc"/><circle class="j5z--zobz"/><circle class="tffiggcyh"/><path class="guadj6bsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:service-levels"} {...others} />);
}

export default Component;
