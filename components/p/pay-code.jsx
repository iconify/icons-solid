import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/y/ypq84ib1f.css';
import '../../css/i/ixe451mff.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ypq84ib1f"/><path class="ixe451mff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:pay-code"} {...others} />);
}

export default Component;
