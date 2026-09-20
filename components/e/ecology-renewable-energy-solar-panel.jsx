import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zknv2ormj.css';
import '../../css/v/vnc6qjvvj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zknv2ormj"/><path class="vnc6qjvvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:ecology-renewable-energy-solar-panel"} {...others} />);
}

export default Component;
