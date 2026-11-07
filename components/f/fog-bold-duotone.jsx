import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h21hmgjli.css';
import '../../css/j/j2mhdfb5v.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/d/de5deccyd.css';
import '../../css/t/tqknh7bma.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h21hmgjli"/><path class="j2mhdfb5v"/><g class="xtpeb-edw"><path class="de5deccyd"/><path class="tqknh7bma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fog-bold-duotone"} {...others} />);
}

export default Component;
