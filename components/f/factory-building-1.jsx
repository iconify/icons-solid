import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nfbuwmo9k.css';
import '../../css/q/qiu-dnb9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nfbuwmo9k"/><path class="qiu-dnb9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:factory-building-1"} {...others} />);
}

export default Component;
