import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cdpy0gweh.css';
import '../../css/y/ye_6tc6ei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cdpy0gweh"/><path class="ye_6tc6ei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cake"} {...others} />);
}

export default Component;
