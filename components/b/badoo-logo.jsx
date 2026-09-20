import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xtze5xb8s.css';
import '../../css/q/qm-hbcc3y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="xtze5xb8s"/><path clip-rule="evenodd" class="qm-hbcc3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:badoo-logo"} {...others} />);
}

export default Component;
