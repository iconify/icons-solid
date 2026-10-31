import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bng21ob9p.css';
import '../../css/z/zxwbuaboh.css';
import '../../css/e/e9owxoivt.css';
import '../../css/x/xl8v9tzqq.css';

const viewBox = {"width":300,"height":200};
const content = `<g class="ft5dv1b6b"><path class="bng21ob9p"/><path class="zxwbuaboh"/><circle class="e9owxoivt"/><path class="xl8v9tzqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:tw"} {...others} />);
}

export default Component;
