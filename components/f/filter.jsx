import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dxqt9nbml.css';
import '../../css/b/b55wgcb0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dxqt9nbml"/><path class="b55wgcb0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:filter"} {...others} />);
}

export default Component;
