import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nfkoaacap.css';
import '../../css/c/c9mbcvbli.css';
import '../../css/g/gziq7pb8t.css';
import '../../css/g/gqkvoyb1b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="nfkoaacap"/><path clip-rule="evenodd" class="c9mbcvbli"/><path clip-rule="evenodd" class="gziq7pb8t"/><path class="gqkvoyb1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:printer-flat"} {...others} />);
}

export default Component;
