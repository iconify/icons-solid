import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4n39ub0l.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="d4n39ub0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ampersand-flat"} {...others} />);
}

export default Component;
