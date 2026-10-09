import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/l/lr6wkxb-c.css';
import '../../css/a/a7fphlb5n.css';
import '../../css/t/tvv7gjyas.css';
import '../../css/t/tooldrzdl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="lr6wkxb-c"/><path class="a7fphlb5n"/><path class="tvv7gjyas"/><path class="tooldrzdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:accessibility-20"} {...others} />);
}

export default Component;
