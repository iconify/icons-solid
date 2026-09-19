import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zyp86db-i.css';
import '../../css/h/hrs2k7xqz.css';
import '../../css/v/v7ll8i85l.css';
import '../../css/a/a0xyf1bmv.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="zyp86db-i"/><path class="hrs2k7xqz"/><path class="v7ll8i85l"/><path class="a0xyf1bmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:streamlit-wordmark"} {...others} />);
}

export default Component;
