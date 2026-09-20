import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gra93dxnb.css';
import '../../css/n/nj6g2rblf.css';
import '../../css/t/t21xz13ln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gra93dxnb"/><path class="nj6g2rblf"/><path class="t21xz13ln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:help-question-network"} {...others} />);
}

export default Component;
