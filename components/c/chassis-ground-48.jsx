import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqsth4bzo.css';
import '../../css/n/ng_o9qbxw.css';
import '../../css/r/rnqgbobut.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yqsth4bzo"/><path class="ng_o9qbxw"/><path class="rnqgbobut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chassis-ground-48"} {...others} />);
}

export default Component;
