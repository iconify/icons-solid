import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zj1i-8bco.css';
import '../../css/z/z12utd1sc.css';
import '../../css/d/d2fkh4b7a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zj1i-8bco"/><path class="z12utd1sc"/><path class="d2fkh4b7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:book-copy-duotone"} {...others} />);
}

export default Component;
