import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yj3m_tb7r.css';
import '../../css/y/y_4r5xblb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yj3m_tb7r"/><path class="y_4r5xblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:folder-sync"} {...others} />);
}

export default Component;
