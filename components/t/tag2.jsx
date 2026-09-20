import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f-3m1zm3w.css';
import '../../css/a/aqk05ob5f.css';
import '../../css/i/iym8_abbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f-3m1zm3w"/><path class="aqk05ob5f"/><path class="iym8_abbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:tag2"} {...others} />);
}

export default Component;
