import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqax-6b-d.css';
import '../../css/r/rc6h4dq6f.css';
import '../../css/s/sjg59cb2m.css';
import '../../css/d/d-ekqwgrr.css';
import '../../css/q/qd4nuxbqg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="jqax-6b-d"><path class="rc6h4dq6f"/><path class="sjg59cb2m"/><path class="d-ekqwgrr"/><path class="qd4nuxbqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:burger"} {...others} />);
}

export default Component;
