import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrfh4bqnd.css';
import '../../css/f/fpe9bqb4y.css';
import '../../css/q/qcqglrpgj.css';

const viewBox = {"width":32,"height":32};
const content = `<rect class="wrfh4bqnd"/><path class="fpe9bqb4y"/><circle class="qcqglrpgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nubjs"} {...others} />);
}

export default Component;
