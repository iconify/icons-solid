import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zeyv90bgs.css';
import '../../css/q/qrmgfrbnf.css';
import '../../css/p/peei90bcs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zeyv90bgs"/><path class="qrmgfrbnf"/><path clip-rule="evenodd" class="peei90bcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:routing-2-bold"} {...others} />);
}

export default Component;
