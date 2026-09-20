import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clrj_mvqf.css';
import '../../css/a/ay6n8vh9w.css';
import '../../css/v/v2bqu0buz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="clrj_mvqf"/><path class="ay6n8vh9w"/><path class="v2bqu0buz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pdfmathtranslate"} {...others} />);
}

export default Component;
