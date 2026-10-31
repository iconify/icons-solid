import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/ht1kor1re.css';
import '../../css/n/nei09-bsn.css';
import '../../css/z/z3aoiroah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ht1kor1re"/><path class="nei09-bsn"/><path class="z3aoiroah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:article"} {...others} />);
}

export default Component;
