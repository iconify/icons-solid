import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re9t7ccrz.css';
import '../../css/x/xd65xdbvb.css';

const viewBox = {"width":726,"height":726};
const content = `<path class="re9t7ccrz"/><path class="xd65xdbvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:it-tools"} {...others} />);
}

export default Component;
