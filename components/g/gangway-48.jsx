import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/he4xe0b7t.css';
import '../../css/c/cgnwxytdv.css';
import '../../css/o/orci3qbbo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="he4xe0b7t"/><path class="cgnwxytdv"/><path class="orci3qbbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gangway-48"} {...others} />);
}

export default Component;
