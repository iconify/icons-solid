import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/khmmrdbxq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="khmmrdbxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:facebook-1-solid"} {...others} />);
}

export default Component;
