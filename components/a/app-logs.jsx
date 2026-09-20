import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxys06b2v.css';
import '../../css/k/kju8o8xdi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sxys06b2v"/><path class="kju8o8xdi ouiIcon__fillSecondary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-logs"} {...others} />);
}

export default Component;
