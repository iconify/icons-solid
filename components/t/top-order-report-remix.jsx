import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxcjuh4_v.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="qxcjuh4_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:top-order-report-remix"} {...others} />);
}

export default Component;
