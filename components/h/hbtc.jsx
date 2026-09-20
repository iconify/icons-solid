import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvad6mxis.css';
import '../../css/s/sr82fubsa.css';
import '../../css/s/ss_1gcb2j.css';
import '../../css/a/a1mnqmbwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qvad6mxis"/><path class="sr82fubsa"/><path class="ss_1gcb2j"/><path class="a1mnqmbwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hbtc"} {...others} />);
}

export default Component;
