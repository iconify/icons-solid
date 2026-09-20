import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oal5ot4fa.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="oal5ot4fa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:device-database-encryption-1-solid"} {...others} />);
}

export default Component;
