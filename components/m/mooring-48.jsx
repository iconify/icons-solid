import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ceo5d9jzo.css';
import '../../css/a/a3rw99r6d.css';
import '../../css/o/oh-p8p-0y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ceo5d9jzo"/><path class="a3rw99r6d"/><path class="oh-p8p-0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mooring-48"} {...others} />);
}

export default Component;
