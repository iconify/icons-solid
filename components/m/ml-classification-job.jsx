import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmejzn51m.css';
import '../../css/x/xc7m02d-s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fmejzn51m"/><path class="ouiIcon__fillSecondary xc7m02d-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:ml-classification-job"} {...others} />);
}

export default Component;
