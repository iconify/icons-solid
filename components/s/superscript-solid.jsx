import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vsne3db-f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vsne3db-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:superscript-solid"} {...others} />);
}

export default Component;
