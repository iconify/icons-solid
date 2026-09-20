import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pilc32a1m.css';
import '../../css/o/op-_uubnu.css';
import '../../css/s/sqca_7b7e.css';
import '../../css/y/yvfzq9--e.css';
import '../../css/s/s3esl7bdi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="pilc32a1m"/><path class="op-_uubnu"/><path class="sqca_7b7e"/><path class="yvfzq9--e"/><path class="s3esl7bdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bill-4"} {...others} />);
}

export default Component;
