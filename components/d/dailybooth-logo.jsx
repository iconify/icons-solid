import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/m/mckcf-beo.css';
import '../../css/o/opaiunbom.css';
import '../../css/u/u48opbb7h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="mckcf-beo"/><path class="opaiunbom"/><path class="u48opbb7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:dailybooth-logo"} {...others} />);
}

export default Component;
