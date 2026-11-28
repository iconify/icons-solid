import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9dd0e63q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n9dd0e63q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:scale-balance"} {...others} />);
}

export default Component;
