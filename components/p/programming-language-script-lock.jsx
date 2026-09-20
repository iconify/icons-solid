import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uwalt-_fs.css';
import '../../css/l/l556_r3_t.css';
import '../../css/n/nzs70z7ln.css';
import '../../css/f/fm2ip7bkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="uwalt-_fs"/><path class="l556_r3_t"/><path class="nzs70z7ln"/><path class="fm2ip7bkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:programming-language-script-lock"} {...others} />);
}

export default Component;
