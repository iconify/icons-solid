import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oh6_ibb5v.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="oh6_ibb5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:atom-solid"} {...others} />);
}

export default Component;
