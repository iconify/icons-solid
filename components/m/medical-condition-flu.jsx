import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xddr7tk8f.css';
import '../../css/j/j9d9kxuxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xddr7tk8f"/><path class="j9d9kxuxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:medical-condition-flu"} {...others} />);
}

export default Component;
