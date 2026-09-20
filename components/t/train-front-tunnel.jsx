import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w42m25myi.css';
import '../../css/j/ja3b1ebtx.css';
import '../../css/m/mus_-9wcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w42m25myi"/><path class="ja3b1ebtx"/><path class="mus_-9wcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:train-front-tunnel"} {...others} />);
}

export default Component;
