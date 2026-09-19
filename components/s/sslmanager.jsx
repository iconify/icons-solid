import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eim6lnoap.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="eim6lnoap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:sslmanager"} {...others} />);
}

export default Component;
