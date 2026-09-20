import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/posn_435t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="posn_435t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:rook"} {...others} />);
}

export default Component;
