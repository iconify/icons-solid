import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iz97go0-n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iz97go0-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:waves-up"} {...others} />);
}

export default Component;
