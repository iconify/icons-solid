import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg6p6hbsc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mg6p6hbsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:escalator-up-arrow"} {...others} />);
}

export default Component;
