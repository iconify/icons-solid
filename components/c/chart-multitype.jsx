import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ng_fvcb6m.css';
import '../../css/v/vhybsjbtm.css';
import '../../css/c/cb92fbcyb.css';
import '../../css/c/cxr8jgpdc.css';
import '../../css/j/j1a_6bqzs.css';
import '../../css/u/u68l7sika.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ng_fvcb6m"/><circle class="vhybsjbtm"/><circle class="cb92fbcyb"/><circle class="cxr8jgpdc"/><circle class="j1a_6bqzs"/><circle class="u68l7sika"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chart-multitype"} {...others} />);
}

export default Component;
