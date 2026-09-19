import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a0poujb0g.css';
import '../../css/q/qyt7vo6ko.css';
import '../../css/c/cb8u71hty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="a0poujb0g"/><path class="qyt7vo6ko"/><path class="cb8u71hty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:camera-night-mode-01"} {...others} />);
}

export default Component;
