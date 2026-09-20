import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgfp4e6dk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jgfp4e6dk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:pln"} {...others} />);
}

export default Component;
