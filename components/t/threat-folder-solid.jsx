import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp04zqb4v.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="gp04zqb4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:threat-folder-solid"} {...others} />);
}

export default Component;
