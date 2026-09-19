import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p5uqkacuj.css';
import '../../css/w/wzu1znbpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p5uqkacuj"/><path class="wzu1znbpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:settings"} {...others} />);
}

export default Component;
