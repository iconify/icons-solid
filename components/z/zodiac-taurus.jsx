import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t-earhali.css';
import '../../css/i/iubxhh0ze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="t-earhali"/><path class="iubxhh0ze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:zodiac-taurus"} {...others} />);
}

export default Component;
