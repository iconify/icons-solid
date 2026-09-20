import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ds2udfbbe.css';
import '../../css/x/xog89lbgx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ds2udfbbe"/><path class="xog89lbgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:file-pdf"} {...others} />);
}

export default Component;
