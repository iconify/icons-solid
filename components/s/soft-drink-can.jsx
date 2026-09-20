import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wht82ihlt.css';
import '../../css/s/szx713b7u.css';
import '../../css/z/zcb21lb4e.css';
import '../../css/w/wbwfcmb3a.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="wht82ihlt"/><path class="szx713b7u"/><path class="zcb21lb4e"/><path class="wbwfcmb3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:soft-drink-can"} {...others} />);
}

export default Component;
