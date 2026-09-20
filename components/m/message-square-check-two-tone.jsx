import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c2k-m-3ae.css';
import '../../css/t/t-h_2-bqw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c2k-m-3ae"/><path class="t-h_2-bqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:message-square-check-two-tone"} {...others} />);
}

export default Component;
