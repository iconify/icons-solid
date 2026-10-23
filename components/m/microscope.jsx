import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/u/uccc5nb8o.css';
import '../../css/g/g9i2q3b6u.css';
import '../../css/z/z9m8im_kj.css';
import '../../css/t/tuft43edv.css';
import '../../css/g/g8xohvkvu.css';
import '../../css/d/dy25q5drc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="uccc5nb8o"/><path class="g9i2q3b6u"/><path class="z9m8im_kj"/><path class="tuft43edv"/><path class="g8xohvkvu"/><path class="dy25q5drc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:microscope"} {...others} />);
}

export default Component;
