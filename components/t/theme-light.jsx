import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zoyzmtr8d.css';
import '../../css/s/smxirpa0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="zoyzmtr8d"/><path class="smxirpa0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:theme-light"} {...others} />);
}

export default Component;
