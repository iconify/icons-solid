import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tj5g77b1a.css';
import '../../css/w/w7tjisbup.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tj5g77b1a"/><path class="w7tjisbup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-mappings"} {...others} />);
}

export default Component;
