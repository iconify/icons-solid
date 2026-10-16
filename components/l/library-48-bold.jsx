import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6cvwtbsp.css';
import '../../css/m/mi7mcubng.css';
import '../../css/w/wu28wrb5n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d6cvwtbsp"/><path class="mi7mcubng"/><path class="wu28wrb5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:library-48-bold"} {...others} />);
}

export default Component;
