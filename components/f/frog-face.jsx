import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nccoq5b0y.css';
import '../../css/t/th2dgc5ur.css';
import '../../css/e/e9jotbc-e.css';
import '../../css/c/csq3qnmej.css';
import '../../css/z/zsp8feb3r.css';
import '../../css/n/nb0hdkyzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nccoq5b0y"/><circle class="th2dgc5ur"/><path class="e9jotbc-e"/><circle class="csq3qnmej"/><path class="zsp8feb3r"/><path class="nb0hdkyzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:frog-face"} {...others} />);
}

export default Component;
