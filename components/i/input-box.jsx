import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/o/oncsjccxj.css';
import '../../css/k/ks_kdrbrt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="oncsjccxj"/><path class="ks_kdrbrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:input-box"} {...others} />);
}

export default Component;
