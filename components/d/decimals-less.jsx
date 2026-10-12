import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ik4rv3xqf.css';
import '../../css/f/fbpsmhboz.css';
import '../../css/o/one7onbdt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ik4rv3xqf"/><path class="fbpsmhboz"/><path class="one7onbdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:decimals-less"} {...others} />);
}

export default Component;
