import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cjgcf5sns.css';
import '../../css/z/zz3qp5rxw.css';
import '../../css/r/rj7t9acar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cjgcf5sns"/><path class="zz3qp5rxw"/><path class="rj7t9acar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sock"} {...others} />);
}

export default Component;
