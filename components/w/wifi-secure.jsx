import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3vyg8drj.css';
import '../../css/l/ljcvjmvwb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o3vyg8drj"/><path class="ljcvjmvwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:wifi-secure"} {...others} />);
}

export default Component;
