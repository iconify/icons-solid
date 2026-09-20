import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bof77n6om.css';
import '../../css/m/mn9zp8bxl.css';
import '../../css/j/jr5b5nohz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bof77n6om"/><path class="mn9zp8bxl"/><path class="jr5b5nohz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:haskell"} {...others} />);
}

export default Component;
