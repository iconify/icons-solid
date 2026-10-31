import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uc1h1wbxg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uc1h1wbxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:package-upload-corner-round"} {...others} />);
}

export default Component;
