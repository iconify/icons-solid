import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b-tcbxbyv.css';
import '../../css/l/l4ex_ybmo.css';
import '../../css/e/ez1x61b2a.css';
import '../../css/t/tj6aivbzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b-tcbxbyv"/><path class="l4ex_ybmo"/><circle class="ez1x61b2a"/><ellipse class="tj6aivbzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:database-search"} {...others} />);
}

export default Component;
