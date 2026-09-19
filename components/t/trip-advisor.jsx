import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nf_c39byp.css';
import '../../css/a/aqyw_snoc.css';
import '../../css/i/idkd0abbq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nf_c39byp"/><path class="aqyw_snoc"/><path class="idkd0abbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:trip-advisor"} {...others} />);
}

export default Component;
