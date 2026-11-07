import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwmrmjbuw.css';
import '../../css/z/zgpdt1b9g.css';
import '../../css/y/ynwwsspwg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kwmrmjbuw"/><path class="zgpdt1b9g"/><path clip-rule="evenodd" class="ynwwsspwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-half-outline"} {...others} />);
}

export default Component;
