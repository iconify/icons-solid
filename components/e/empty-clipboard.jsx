import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ev72s_jnx.css';
import '../../css/s/ssgwz8-ln.css';
import '../../css/f/fk-7c9b4y.css';
import '../../css/s/s3ej8i2vg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ev72s_jnx"/><path class="ssgwz8-ln"/><path class="fk-7c9b4y"/><path class="s3ej8i2vg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:empty-clipboard"} {...others} />);
}

export default Component;
