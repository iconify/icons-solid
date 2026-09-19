import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9-03fbxk.css';
import '../../css/z/zwafnhb2k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c9-03fbxk"/><path class="zwafnhb2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:alarm-on"} {...others} />);
}

export default Component;
