import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfqb5ccjd.css';
import '../../css/x/xh7-42bhx.css';
import '../../css/t/tk2wtebhl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sfqb5ccjd"/><path class="xh7-42bhx"/><path class="tk2wtebhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wand-48-bold"} {...others} />);
}

export default Component;
