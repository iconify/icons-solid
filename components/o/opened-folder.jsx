import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7g52cc-s.css';
import '../../css/p/pftszrbvw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s7g52cc-s"/><path class="pftszrbvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:opened-folder"} {...others} />);
}

export default Component;
