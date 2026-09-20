import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mz6mhscer.css';
import '../../css/i/i7nmstb0v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mz6mhscer ouiIcon__fillSecondary"/><path class="i7nmstb0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-canvas"} {...others} />);
}

export default Component;
