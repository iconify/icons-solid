import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dsa7v3bjy.css';
import '../../css/f/fh4ar_bpl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dsa7v3bjy"/><path class="fh4ar_bpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:gender-hermaphrodite"} {...others} />);
}

export default Component;
