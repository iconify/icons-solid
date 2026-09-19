import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2n7cu74s.css';

const viewBox = {"width":1280,"height":1536};
const content = `<path class="v2n7cu74s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:file-download"} {...others} />);
}

export default Component;
