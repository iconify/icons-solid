import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdp22ib8n.css';
import '../../css/s/sz152uiha.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jdp22ib8n"/><path class="sz152uiha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-multiple-01"} {...others} />);
}

export default Component;
