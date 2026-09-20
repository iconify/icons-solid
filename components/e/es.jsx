import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi2203rfe.css';
import '../../css/p/pl1wuvfgb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fi2203rfe"/><path class="pl1wuvfgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:es"} {...others} />);
}

export default Component;
