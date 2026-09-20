import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyr7ylbfe.css';
import '../../css/h/h7wrbubgc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jyr7ylbfe"/><path class="h7wrbubgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:instrument-saxophone"} {...others} />);
}

export default Component;
