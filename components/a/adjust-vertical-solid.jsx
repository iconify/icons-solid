import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7q6txb3j.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="h7q6txb3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:adjust-vertical-solid"} {...others} />);
}

export default Component;
