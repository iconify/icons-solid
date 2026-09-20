import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdm9jbcnr.css';
import '../../css/e/erp-9sbvf.css';
import '../../css/m/mztshossz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jdm9jbcnr"/><path class="erp-9sbvf"/><path class="mztshossz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:repo-forked-24"} {...others} />);
}

export default Component;
