import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbu-gbckp.css';
import '../../css/t/t9c8c1b5i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xbu-gbckp"/><path class="t9c8c1b5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-open-20"} {...others} />);
}

export default Component;
