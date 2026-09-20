import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a15vrjyzh.css';
import '../../css/f/fwgabzb5n.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="a15vrjyzh"/><path class="fwgabzb5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:record-audio"} {...others} />);
}

export default Component;
