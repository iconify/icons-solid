import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kr3fq8j0y.css';

const viewBox = {"width":18,"height":24};
const content = `<path class="kr3fq8j0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:sublime-text"} {...others} />);
}

export default Component;
