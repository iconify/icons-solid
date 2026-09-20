import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xt1fr6buf.css';
import '../../css/f/fqf74lb2o.css';
import '../../css/j/j36fnwxrx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="xt1fr6buf"/><circle class="fqf74lb2o"/><path class="j36fnwxrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:question-light"} {...others} />);
}

export default Component;
