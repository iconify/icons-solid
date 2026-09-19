import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a54rpy29c.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="a54rpy29c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:prescription-document"} {...others} />);
}

export default Component;
