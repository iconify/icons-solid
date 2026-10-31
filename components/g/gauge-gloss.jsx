import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qry4i52_x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qry4i52_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gauge-gloss"} {...others} />);
}

export default Component;
