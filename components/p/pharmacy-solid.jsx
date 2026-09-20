import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uuft51n7e.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="uuft51n7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:pharmacy-solid"} {...others} />);
}

export default Component;
