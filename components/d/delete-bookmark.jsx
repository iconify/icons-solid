import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/g5sjxeiis.css';
import '../../css/g/glo57pbgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="g5sjxeiis"/><path class="glo57pbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:delete-bookmark"} {...others} />);
}

export default Component;
