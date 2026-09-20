import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zfdr3yxhp.css';
import '../../css/g/ghya2pbow.css';
import '../../css/h/hhc96f81o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zfdr3yxhp"/><circle class="ghya2pbow"/><rect class="hhc96f81o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:user-lock"} {...others} />);
}

export default Component;
