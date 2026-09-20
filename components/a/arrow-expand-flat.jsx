import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyz64c2_p.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="lyz64c2_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:arrow-expand-flat"} {...others} />);
}

export default Component;
