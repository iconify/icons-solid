import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3n9u1q-k.css';
import '../../css/j/jmguqjm_t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a3n9u1q-k"/><path class="jmguqjm_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-transmit-double-filled"} {...others} />);
}

export default Component;
