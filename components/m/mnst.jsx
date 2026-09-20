import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdvkxgexj.css';
import '../../css/l/lez75epbo.css';
import '../../css/c/c1cb-s12j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hdvkxgexj"/><path class="lez75epbo"/><path class="c1cb-s12j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mnst"} {...others} />);
}

export default Component;
