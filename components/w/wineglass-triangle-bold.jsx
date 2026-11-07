import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cb-67rblr.css';
import '../../css/e/el5xkem2j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cb-67rblr"/><path class="el5xkem2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wineglass-triangle-bold"} {...others} />);
}

export default Component;
