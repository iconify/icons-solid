import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sw9225bsx.css';
import '../../css/y/yf5go4bkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sw9225bsx"/><path class="yf5go4bkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:bolt"} {...others} />);
}

export default Component;
