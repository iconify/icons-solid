import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/d/d6miwubix.css';
import '../../css/w/wdn7drbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="d6miwubix"/><path class="wdn7drbsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-unknown"} {...others} />);
}

export default Component;
