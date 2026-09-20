import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/v/vl62orbzq.css';
import '../../css/c/cayg4r70n.css';
import '../../css/h/hlaykcb8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="vl62orbzq"/><path class="cayg4r70n"/><path class="hlaykcb8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:upload-computer"} {...others} />);
}

export default Component;
