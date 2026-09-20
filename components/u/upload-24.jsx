import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukv352b1i.css';
import '../../css/n/n1m7q-3fc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ukv352b1i"/><path class="n1m7q-3fc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:upload-24"} {...others} />);
}

export default Component;
