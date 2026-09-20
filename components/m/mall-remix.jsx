import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9v1q2zst.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="m9v1q2zst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:mall-remix"} {...others} />);
}

export default Component;
