import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h67270lqc.css';
import '../../css/y/ybufkabpo.css';
import '../../css/a/asbceibyx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h67270lqc"/><circle class="ybufkabpo"/><circle class="asbceibyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:tic-tac-toe"} {...others} />);
}

export default Component;
