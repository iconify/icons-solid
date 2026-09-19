import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-j-qfbkh.css';
import '../../css/x/xx4upobit.css';
import '../../css/b/b6ueueufz.css';
import '../../css/n/nvorv_bgg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="m-j-qfbkh"/><circle class="xx4upobit"/><circle class="b6ueueufz"/><circle class="nvorv_bgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:data-base"} {...others} />);
}

export default Component;
