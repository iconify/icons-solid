import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iuxaczbto.css';
import '../../css/f/ff_z8rm8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><rect class="iuxaczbto"/><rect class="ff_z8rm8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:align-3-horizontal-filled"} {...others} />);
}

export default Component;
