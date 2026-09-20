import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d185acboo.css';
import '../../css/o/o4dhdybxn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d185acboo"/><path class="o4dhdybxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:prob"} {...others} />);
}

export default Component;
