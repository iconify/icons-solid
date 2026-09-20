import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wllkppbaq.css';
import '../../css/g/gamq8xb-i.css';
import '../../css/i/ik78brbww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="wllkppbaq"/><path class="gamq8xb-i"/><path class="ik78brbww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:adobe-lightroom-logo"} {...others} />);
}

export default Component;
