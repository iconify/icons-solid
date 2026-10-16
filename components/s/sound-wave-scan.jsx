import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx-0v6v5v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jx-0v6v5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sound-wave-scan"} {...others} />);
}

export default Component;
