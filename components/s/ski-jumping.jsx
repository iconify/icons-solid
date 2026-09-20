import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmn0rkbxk.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="jmn0rkbxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:ski-jumping"} {...others} />);
}

export default Component;
