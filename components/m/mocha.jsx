import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsexmdkfd.css';
import '../../css/w/w25867bho.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xsexmdkfd"/><path class="w25867bho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:mocha"} {...others} />);
}

export default Component;
