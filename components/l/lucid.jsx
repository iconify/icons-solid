import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/seiyok0se.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="seiyok0se"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lucid"} {...others} />);
}

export default Component;
