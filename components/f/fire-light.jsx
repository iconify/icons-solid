import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcmlopf1w.css';
import '../../css/n/nhd6537wc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qcmlopf1w"/><path class="nhd6537wc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:fire-light"} {...others} />);
}

export default Component;
