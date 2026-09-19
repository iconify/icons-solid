import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/c/ccbbnd11y.css';
import '../../css/s/sc5y7lboz.css';
import '../../css/y/ybmshrj6v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ccbbnd11y"/><circle class="sc5y7lboz"/><path class="ybmshrj6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:people-safe"} {...others} />);
}

export default Component;
