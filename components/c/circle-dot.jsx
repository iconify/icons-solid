import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyjo58brx.css';
import '../../css/o/or0-msbfm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k yyjo58brx"/><path class="or0-msbfm wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:circle-dot"} {...others} />);
}

export default Component;
