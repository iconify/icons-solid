import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jchlk3bly.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jchlk3bly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:up-right-arrow"} {...others} />);
}

export default Component;
