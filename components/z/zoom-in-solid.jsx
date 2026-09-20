import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zs4p0ceyx.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="zs4p0ceyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:zoom-in-solid"} {...others} />);
}

export default Component;
