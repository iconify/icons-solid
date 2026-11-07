import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k98gnnbfh.css';
import '../../css/v/voeniibqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k98gnnbfh"/><path class="voeniibqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:inbox-bold"} {...others} />);
}

export default Component;
