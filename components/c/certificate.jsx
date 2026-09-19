import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhdbmwbnb.css';

const viewBox = {"width":1024,"height":1022};
const content = `<path class="fhdbmwbnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:certificate"} {...others} />);
}

export default Component;
