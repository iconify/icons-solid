import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn54ed63y.css';
import '../../css/c/c1h1m6bmx.css';
import '../../css/p/pybd_506k.css';
import '../../css/h/h6xbz7t5j.css';
import '../../css/w/w7bygdcze.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="jn54ed63y"/><path class="c1h1m6bmx"/><path class="pybd_506k"/><path class="h6xbz7t5j"/><path class="w7bygdcze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:java"} {...others} />);
}

export default Component;
