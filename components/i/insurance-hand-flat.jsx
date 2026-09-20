import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1dt0ob2c.css';
import '../../css/j/js9nb_byl.css';
import '../../css/n/n8e16pbqa.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f1dt0ob2c"/><path class="js9nb_byl"/><path clip-rule="evenodd" class="n8e16pbqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:insurance-hand-flat"} {...others} />);
}

export default Component;
