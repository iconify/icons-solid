import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cl4fetb6c.css';
import '../../css/b/bvsq-jb3c.css';
import '../../css/o/otyr5zb3v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cl4fetb6c"/><path class="bvsq-jb3c"/><path clip-rule="evenodd" class="otyr5zb3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:padlock-key-flat"} {...others} />);
}

export default Component;
