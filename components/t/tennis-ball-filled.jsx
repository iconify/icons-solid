import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvi2gab-r.css';
import '../../css/t/tctjssbck.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dvi2gab-r"/><path class="tctjssbck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:tennis-ball-filled"} {...others} />);
}

export default Component;
