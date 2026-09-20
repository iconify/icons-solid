import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cretmw0yu.css';
import '../../css/l/l7mp3jb5j.css';
import '../../css/t/tr5khpbzi.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="cretmw0yu"/><path class="l7mp3jb5j"/><path class="tr5khpbzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:content-paper-edit"} {...others} />);
}

export default Component;
