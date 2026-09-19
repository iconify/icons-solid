import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aovzl8biz.css';
import '../../css/o/oj1pjebiy.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="aovzl8biz"/><path class="oj1pjebiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:run"} {...others} />);
}

export default Component;
