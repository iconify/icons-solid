import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aev39tqol.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="aev39tqol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:adobe-mediaencoder"} {...others} />);
}

export default Component;
