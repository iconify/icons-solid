import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/js49d46at.css';
import '../../css/o/oj-lqzbdx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="js49d46at"/><path class="oj-lqzbdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:package"} {...others} />);
}

export default Component;
