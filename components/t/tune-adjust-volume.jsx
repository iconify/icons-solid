import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbtjk6bah.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qbtjk6bah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:tune-adjust-volume"} {...others} />);
}

export default Component;
