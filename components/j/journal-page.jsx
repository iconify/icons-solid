import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g6dlgpert.css';
import '../../css/c/c0ix4zbqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g6dlgpert"/><path class="c0ix4zbqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:journal-page"} {...others} />);
}

export default Component;
