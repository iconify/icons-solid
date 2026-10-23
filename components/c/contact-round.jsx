import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b2w79fbyh.css';
import '../../css/p/p839x-bnc.css';
import '../../css/e/eaj-j_bjx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b2w79fbyh"/><path class="p839x-bnc"/><path class="eaj-j_bjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:contact-round"} {...others} />);
}

export default Component;
