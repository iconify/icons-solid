import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unysilbos.css';
import '../../css/n/nyqns5dic.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="unysilbos"/><path class="nyqns5dic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:christian-cross-1"} {...others} />);
}

export default Component;
