import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fva8p8ufs.css';
import '../../css/u/u9tojb6xh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fva8p8ufs"/><path class="u9tojb6xh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:mail-send-reply-all-solid"} {...others} />);
}

export default Component;
