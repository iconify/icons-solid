import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftlaln56r.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ftlaln56r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:compsition-horizontal-flat"} {...others} />);
}

export default Component;
