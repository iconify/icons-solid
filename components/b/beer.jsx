import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm4e34bbn.css';
import '../../css/j/jab1lr5xd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xm4e34bbn"/><path class="jab1lr5xd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:beer"} {...others} />);
}

export default Component;
