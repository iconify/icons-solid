import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5ev7wbqm.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="w5ev7wbqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:quotation-mark-20-solid"} {...others} />);
}

export default Component;
