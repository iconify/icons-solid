import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/en_xgrb1u.css';
import '../../css/f/fns7ilq0e.css';
import '../../css/v/vabrm_bjl.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="en_xgrb1u"/><path class="fns7ilq0e"/><path class="vabrm_bjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:mg"} {...others} />);
}

export default Component;
