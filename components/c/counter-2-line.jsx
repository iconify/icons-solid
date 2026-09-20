import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv49c2bhl.css';
import '../../css/s/sw90srnhq.css';
import '../../css/i/iebf_nbxt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sv49c2bhl"/><path class="sw90srnhq"/><path class="iebf_nbxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:counter-2-line"} {...others} />);
}

export default Component;
