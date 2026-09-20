import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xr9wr-bhx.css';
import '../../css/b/bd8f5nbwf.css';
import '../../css/m/mabwzbbvc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xr9wr-bhx"/><circle class="bd8f5nbwf"/><path class="mabwzbbvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:info-circle"} {...others} />);
}

export default Component;
