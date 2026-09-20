import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdrwgyy_b.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="xdrwgyy_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:cut-remix"} {...others} />);
}

export default Component;
