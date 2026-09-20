import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bkto-2bwr.css';
import '../../css/x/x_lnf_bhh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bkto-2bwr"/><circle class="x_lnf_bhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:user-contributions-rtl"} {...others} />);
}

export default Component;
