import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjt3w2r2y.css';
import '../../css/u/ur0c75b6l.css';
import '../../css/o/oepyxvbqx.css';
import '../../css/a/ab7x2lbyj.css';
import '../../css/y/yu2hljb1e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yjt3w2r2y"/><path class="ur0c75b6l"/><path class="oepyxvbqx"/><path class="ab7x2lbyj"/><path class="yu2hljb1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:swarmpit"} {...others} />);
}

export default Component;
