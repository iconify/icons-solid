import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpo_93sap.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xpo_93sap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:keyboard-tab"} {...others} />);
}

export default Component;
