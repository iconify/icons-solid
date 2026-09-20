import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gom9ftplv.css';
import '../../css/b/b38w9dwka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gom9ftplv"/><path class="b38w9dwka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-wechat"} {...others} />);
}

export default Component;
