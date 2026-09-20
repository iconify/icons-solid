import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xs3uvlr_p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xs3uvlr_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:cloud-upload-o"} {...others} />);
}

export default Component;
