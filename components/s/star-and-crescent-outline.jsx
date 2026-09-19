import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ih--ifrdt.css';
import '../../css/c/cqyqpbkvg.css';
import '../../css/d/d5vtl26pr.css';
import '../../css/b/bt0dx5bel.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ih--ifrdt"/><path class="cqyqpbkvg"/><path class="d5vtl26pr"/><path class="bt0dx5bel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:star-and-crescent-outline"} {...others} />);
}

export default Component;
