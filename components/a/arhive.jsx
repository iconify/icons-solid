import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/c/crhqw7b7l.css';
import '../../css/g/gg3kdbjfn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="crhqw7b7l"/><path class="gg3kdbjfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive"} {...others} />);
}

export default Component;
