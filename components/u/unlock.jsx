import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fwbs8kbqi.css';
import '../../css/o/ojjd48bzf.css';
import '../../css/j/ju8za1byn.css';
import '../../css/j/jcnvp7bem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="fwbs8kbqi"/><rect class="ojjd48bzf"/><path class="ju8za1byn"/><path class="jcnvp7bem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:unlock"} {...others} />);
}

export default Component;
