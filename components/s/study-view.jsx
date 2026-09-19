import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhkw86bin.css';
import '../../css/x/x8cmsqbjt.css';
import '../../css/t/tx7rwubgb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yhkw86bin"/><path class="x8cmsqbjt"/><path class="tx7rwubgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:study-view"} {...others} />);
}

export default Component;
