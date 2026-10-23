import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qsc_f-b5y.css';
import '../../css/j/jm6hiq3gk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qsc_f-b5y"/><path class="jm6hiq3gk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:bot"} {...others} />);
}

export default Component;
