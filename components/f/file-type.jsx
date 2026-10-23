import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cqe1ttbfi.css';
import '../../css/a/a0iicqbdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cqe1ttbfi"/><path class="a0iicqbdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:file-type"} {...others} />);
}

export default Component;
