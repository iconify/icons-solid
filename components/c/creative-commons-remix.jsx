import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1b780u_o.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="n1b780u_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:creative-commons-remix"} {...others} />);
}

export default Component;
