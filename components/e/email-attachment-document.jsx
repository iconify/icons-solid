import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/xvz10obcq.css';
import '../../css/e/e24252bcn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="xvz10obcq"/><path class="e24252bcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:email-attachment-document"} {...others} />);
}

export default Component;
