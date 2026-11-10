import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ehhm63b0r.css';
import '../../css/f/f-ad1tgwz.css';
import '../../css/j/j32hyhbya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ehhm63b0r"/><path class="f-ad1tgwz"/><path class="j32hyhbya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-phone-rotate"} {...others} />);
}

export default Component;
