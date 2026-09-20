import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/z/ztv38cnak.css';
import '../../css/i/i4p4l816w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="ztv38cnak"/><path class="i4p4l816w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:wrench"} {...others} />);
}

export default Component;
