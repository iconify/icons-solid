import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjpr6kb9a.css';
import '../../css/m/mlayuqb-h.css';
import '../../css/d/dpf700fwr.css';
import '../../css/q/qmp0aacci.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="xjpr6kb9a"/><path class="mlayuqb-h"/><path class="dpf700fwr"/><path class="qmp0aacci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:japanese-service-charge-button"} {...others} />);
}

export default Component;
