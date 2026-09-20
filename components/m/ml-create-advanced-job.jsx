import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qq9_xubku.css';
import '../../css/x/xdtlmkksx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qq9_xubku"/><path class="ouiIcon__fillSecondary xdtlmkksx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:ml-create-advanced-job"} {...others} />);
}

export default Component;
