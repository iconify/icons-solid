import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/admg7bcpa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="admg7bcpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pleroma"} {...others} />);
}

export default Component;
