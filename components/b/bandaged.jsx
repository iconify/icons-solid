import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4-48zo7f.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="v4-48zo7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:bandaged"} {...others} />);
}

export default Component;
