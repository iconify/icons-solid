import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cv3krv5vt.css';
import '../../css/a/ab3nawxxs.css';
import '../../css/f/f42h4jbyz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cv3krv5vt"/><path class="ab3nawxxs"/><path class="f42h4jbyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:web3"} {...others} />);
}

export default Component;
