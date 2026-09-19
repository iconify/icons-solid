import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qzchek7mi.css';
import '../../css/y/ya6370b_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qzchek7mi"/><circle class="ya6370b_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:linkedin"} {...others} />);
}

export default Component;
