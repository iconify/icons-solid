import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1kiis7qb.css';

const viewBox = {"width":1408,"height":1472};
const content = `<path class="f1kiis7qb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:user-boss"} {...others} />);
}

export default Component;
