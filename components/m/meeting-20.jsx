import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-p7dsdol.css';
import '../../css/h/hiujlmj2j.css';
import '../../css/z/zxv1icbdw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a-p7dsdol"/><path class="hiujlmj2j"/><path class="zxv1icbdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:meeting-20"} {...others} />);
}

export default Component;
