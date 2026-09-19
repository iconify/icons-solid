import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2c_gdcrq.css';
import '../../css/h/hcr-277-p.css';
import '../../css/q/qen33gjlg.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="w2c_gdcrq"/><path class="hcr-277-p"/><path class="qen33gjlg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:boot"} {...others} />);
}

export default Component;
