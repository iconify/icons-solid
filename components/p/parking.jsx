import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otzh3hbtm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="otzh3hbtm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:parking"} {...others} />);
}

export default Component;
