import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7s9cworz.css';
import '../../css/l/l6n8opbbo.css';
import '../../css/b/btotlsqon.css';
import '../../css/g/g5hek6cqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b7s9cworz"/><path clip-rule="evenodd" class="l6n8opbbo"/><path class="btotlsqon"/><path class="g5hek6cqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-minimalistic-outline"} {...others} />);
}

export default Component;
