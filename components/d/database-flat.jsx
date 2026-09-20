import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-a7cgbxy.css';
import '../../css/t/t_a3cubjg.css';
import '../../css/s/s564d7w0u.css';
import '../../css/d/dkzzthbii.css';
import '../../css/z/zuatb06ta.css';
import '../../css/l/liskrsb7r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="y-a7cgbxy"/><path class="t_a3cubjg"/><path clip-rule="evenodd" class="s564d7w0u"/><path class="dkzzthbii"/><path clip-rule="evenodd" class="zuatb06ta"/><path class="liskrsb7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:database-flat"} {...others} />);
}

export default Component;
