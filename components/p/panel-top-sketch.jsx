import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y8an-tb3i.css';
import '../../css/y/yjwwm6bdv.css';
import '../../css/g/gbmauw1xh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="y8an-tb3i"/><path class="yjwwm6bdv"/><path class="gbmauw1xh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:panel-top-sketch"} {...others} />);
}

export default Component;
