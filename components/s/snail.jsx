import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yso413beu.css';
import '../../css/g/gee095bbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yso413beu"/><path class="gee095bbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:snail"} {...others} />);
}

export default Component;
