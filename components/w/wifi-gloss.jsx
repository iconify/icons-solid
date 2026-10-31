import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnf5qz6qa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cnf5qz6qa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wifi-gloss"} {...others} />);
}

export default Component;
