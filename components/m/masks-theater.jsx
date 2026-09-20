import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qc8bz2e6u.css';
import '../../css/u/uu_5xzlli.css';
import '../../css/j/jgg0ex4bb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qc8bz2e6u"/><path class="uu_5xzlli"/><path class="jgg0ex4bb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:masks-theater"} {...others} />);
}

export default Component;
