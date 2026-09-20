import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqm39aclf.css';
import '../../css/t/tzb51cxjt.css';
import '../../css/e/epfj3sb4v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yqm39aclf"/><path class="tzb51cxjt"/><path class="epfj3sb4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:graph-bar"} {...others} />);
}

export default Component;
