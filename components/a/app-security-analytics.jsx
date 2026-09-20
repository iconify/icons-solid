import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfxpjhf8j.css';
import '../../css/q/qn4nzybbc.css';
import '../../css/o/owvyp-b9u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sfxpjhf8j"/><path class="ouiIcon__fillSecondary qn4nzybbc"/><path class="owvyp-b9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-security-analytics"} {...others} />);
}

export default Component;
