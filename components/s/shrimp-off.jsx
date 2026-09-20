import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nntiq4wrh.css';
import '../../css/e/eoake_fby.css';
import '../../css/c/cx7nmhbzv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nntiq4wrh"/><path class="eoake_fby"/><path class="cx7nmhbzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:shrimp-off"} {...others} />);
}

export default Component;
