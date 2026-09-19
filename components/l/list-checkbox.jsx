import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zpw9osbue.css';
import '../../css/r/rmibb17la.css';
import '../../css/j/j3q0f_-pz.css';
import '../../css/g/gkynlvbvo.css';
import '../../css/h/htqe_6buu.css';
import '../../css/m/m9h-reofp.css';
import '../../css/d/downzxbcc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMfuSZboU"><g class="ft5dv1b6b"><path clip-rule="evenodd" class="zpw9osbue"/><path class="rmibb17la"/><path clip-rule="evenodd" class="j3q0f_-pz"/><path class="gkynlvbvo"/><path clip-rule="evenodd" class="htqe_6buu"/><path class="m9h-reofp"/><path class="downzxbcc"/></g></mask></defs><path mask="url(#SVGMfuSZboU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:list-checkbox"} {...others} />);
}

export default Component;
