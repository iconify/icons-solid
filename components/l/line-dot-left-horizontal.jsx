import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eu9kkgbdm.css';
import '../../css/m/m5wsf8blc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eu9kkgbdm"/><circle class="m5wsf8blc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:line-dot-left-horizontal"} {...others} />);
}

export default Component;
