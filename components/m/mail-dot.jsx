import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xd5kflbch.css';
import '../../css/c/c8oi8ccvi.css';
import '../../css/y/yu5hcsbzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xd5kflbch"/><path class="c8oi8ccvi"/><circle class="yu5hcsbzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mail-dot"} {...others} />);
}

export default Component;
