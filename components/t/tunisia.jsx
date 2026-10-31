import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdftbpbaj.css';
import '../../css/w/wfcjrhbfv.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="wdftbpbaj"/><path class="wfcjrhbfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:tunisia"} {...others} />);
}

export default Component;
