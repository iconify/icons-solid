import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bj2hlhbfp.css';
import '../../css/o/o6v4stbni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bj2hlhbfp"/><circle class="o6v4stbni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:line-dot-right-horizontal"} {...others} />);
}

export default Component;
