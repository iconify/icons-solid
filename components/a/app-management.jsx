import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5t4qho-n.css';
import '../../css/e/e3e-l4bib.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j5t4qho-n ouiIcon__fillSecondary"/><path class="e3e-l4bib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-management"} {...others} />);
}

export default Component;
