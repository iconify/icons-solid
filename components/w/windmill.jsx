import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6h2r6bje.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="t6h2r6bje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:windmill"} {...others} />);
}

export default Component;
