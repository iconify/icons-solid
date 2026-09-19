import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/j/jcxlm2b2l.css';
import '../../css/a/ar-7x19wi.css';
import '../../css/z/zjh4xye2a.css';
import '../../css/s/smxdsl_uu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="jcxlm2b2l"/><path class="ar-7x19wi"/><path class="zjh4xye2a"/><path class="smxdsl_uu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:file-jpg"} {...others} />);
}

export default Component;
