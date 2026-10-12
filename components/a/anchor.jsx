import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d--s4ac9g.css';
import '../../css/y/ykzv_s3ci.css';
import '../../css/o/o9kppwbrt.css';
import '../../css/i/ipdeg6wsl.css';
import '../../css/e/ewexo-bfn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="d--s4ac9g"/><path class="ykzv_s3ci"/><circle class="o9kppwbrt"/><path class="ipdeg6wsl"/><path class="ewexo-bfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:anchor"} {...others} />);
}

export default Component;
