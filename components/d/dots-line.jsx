import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t921sfb1a.css';
import '../../css/g/gh6kuqeme.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t921sfb1a"/><path class="gh6kuqeme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:dots-line"} {...others} />);
}

export default Component;
