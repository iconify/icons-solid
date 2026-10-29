import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ya_ti3b9f.css';
import '../../css/t/txfeqhb9y.css';
import '../../css/x/xsaz4lkzh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="ya_ti3b9f"/><path class="txfeqhb9y wm-a"/><path class="wm-s xsaz4lkzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:copy-check-solid"} {...others} />);
}

export default Component;
