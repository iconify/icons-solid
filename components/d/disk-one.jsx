import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/g/g96sazbxl.css';
import '../../css/b/bo-coebrs.css';
import '../../css/f/fxsft62au.css';

const viewBox = {"width":49,"height":48};
const content = `<g class="casyzt9mq"><path class="g96sazbxl"/><path class="bo-coebrs"/><path class="fxsft62au"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:disk-one"} {...others} />);
}

export default Component;
