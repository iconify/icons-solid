import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttck2cbln.css';
import '../../css/g/gd-53hb5a.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ouiIcon__fillSecondary ttck2cbln"/><path class="gd-53hb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-lens"} {...others} />);
}

export default Component;
