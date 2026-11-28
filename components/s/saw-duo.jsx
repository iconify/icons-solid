import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fljq5bc4r.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o5thz8_fw.css';
import '../../css/r/rgkol73db.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fljq5bc4r secondary"/><g class="dt0cm9dhy primary"><path class="o5thz8_fw"/><path class="rgkol73db"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:saw-duo"} {...others} />);
}

export default Component;
