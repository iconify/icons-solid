import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wb2av2t2v.css';

const viewBox = {"width":100,"height":30};
const content = `<path clip-rule="evenodd" class="wb2av2t2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:inngest-dark"} {...others} />);
}

export default Component;
