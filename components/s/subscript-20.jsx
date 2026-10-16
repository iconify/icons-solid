import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/opadiwbki.css';
import '../../css/y/yk_ojccds.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="opadiwbki"/><path class="yk_ojccds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:subscript-20"} {...others} />);
}

export default Component;
