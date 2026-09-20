import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfgzsf_mw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sfgzsf_mw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:drawing-board-line"} {...others} />);
}

export default Component;
