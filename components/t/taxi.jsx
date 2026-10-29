import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mypcxdb2j.css';
import '../../css/g/g3ln1eoob.css';
import '../../css/g/gmaorj__k.css';
import '../../css/s/saup0_b6w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mypcxdb2j wm-a"/><path class="g3ln1eoob wm-k"/><path class="gmaorj__k wm-k"/><path class="saup0_b6w wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:taxi"} {...others} />);
}

export default Component;
