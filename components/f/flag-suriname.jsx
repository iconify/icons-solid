import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/z/zqz2207hd.css';
import '../../css/h/hjszcto5m.css';
import '../../css/g/gzvmszbho.css';
import '../../css/u/uwqnao-jq.css';
import '../../css/b/bae1lf31b.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><path class="zqz2207hd"/><path class="hjszcto5m"/><path class="gzvmszbho"/><path class="uwqnao-jq"/><path class="bae1lf31b"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-suriname"} {...others} />);
}

export default Component;
