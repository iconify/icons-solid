import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sieadqeio.css';
import '../../css/q/qorwe0ghw.css';
import '../../css/w/wyomucc5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="sieadqeio"/><path class="qorwe0ghw"/><path class="wyomucc5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:coding-file-iso-tag"} {...others} />);
}

export default Component;
