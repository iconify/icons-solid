import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j54z2ny8a.css';
import '../../css/o/og107ss5y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j54z2ny8a"/><path class="og107ss5y ouiIcon__fillSecondary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-security"} {...others} />);
}

export default Component;
