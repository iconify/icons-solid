import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp7pa0bqb.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="xp7pa0bqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:photonineframes"} {...others} />);
}

export default Component;
