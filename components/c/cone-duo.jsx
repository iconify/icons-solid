import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jb-03yjgh.css';
import '../../css/k/knh0k5bqt.css';
import '../../css/a/attsc9boi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="jb-03yjgh"/><path class="knh0k5bqt"/><path class="attsc9boi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:cone-duo"} {...others} />);
}

export default Component;
