import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j5uat5jqr.css';
import '../../css/o/ov2miw2og.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j5uat5jqr"/><path class="ov2miw2og"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:contact-book"} {...others} />);
}

export default Component;
