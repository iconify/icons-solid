import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/p/psncsiz9v.css';
import '../../css/h/hjixulbzq.css';
import '../../css/a/a3525ioso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="psncsiz9v"/><path class="hjixulbzq"/><path class="a3525ioso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:kappa"} {...others} />);
}

export default Component;
