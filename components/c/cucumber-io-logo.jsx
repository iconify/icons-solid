import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/c/cpvs1rbic.css';
import '../../css/g/gm5bzunuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="cpvs1rbic"/><path class="gm5bzunuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:cucumber-io-logo"} {...others} />);
}

export default Component;
