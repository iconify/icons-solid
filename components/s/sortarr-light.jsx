import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ra6wx1tpy.css';
import '../../css/h/h5po_umnf.css';
import '../../css/a/a-z8z7pww.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="ra6wx1tpy"/><path class="h5po_umnf"/><path class="a-z8z7pww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sortarr-light"} {...others} />);
}

export default Component;
