import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/okpi2ubns.css';
import '../../css/k/keaj_1kvq.css';
import '../../css/s/s3iqaxbsl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="okpi2ubns"/><path class="keaj_1kvq"/><path class="s3iqaxbsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:css-three"} {...others} />);
}

export default Component;
