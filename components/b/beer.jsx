import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6fsyy90t.css';

const viewBox = {"width":1600,"height":1408};
const content = `<path class="z6fsyy90t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:beer"} {...others} />);
}

export default Component;
