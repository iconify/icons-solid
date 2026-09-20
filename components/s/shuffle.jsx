import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4qu_kbxw.css';
import '../../css/j/jrj0xe63g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f4qu_kbxw"/><path class="jrj0xe63g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:shuffle"} {...others} />);
}

export default Component;
