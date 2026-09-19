import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/c/ccbbnd11y.css';
import '../../css/o/oh0gm-amo.css';
import '../../css/y/ybmshrj6v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ccbbnd11y"/><circle class="oh0gm-amo"/><path class="ybmshrj6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:people-safe"} {...others} />);
}

export default Component;
