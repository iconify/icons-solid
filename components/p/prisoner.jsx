import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6atupb1k.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="v6atupb1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:prisoner"} {...others} />);
}

export default Component;
