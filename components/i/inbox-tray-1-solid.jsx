import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9s3m40bz.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="a9s3m40bz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:inbox-tray-1-solid"} {...others} />);
}

export default Component;
