import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbfjszvql.css';
import '../../css/q/qstm5aclq.css';
import '../../css/u/u9olyabjd.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="tbfjszvql"/><path class="qstm5aclq"/><path class="u9olyabjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:websheet"} {...others} />);
}

export default Component;
