import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q43qz1e2q.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="q43qz1e2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:earpods-solid"} {...others} />);
}

export default Component;
