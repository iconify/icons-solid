import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zd5y7vbjg.css';
import '../../css/x/x5qxkepnv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zd5y7vbjg"/><path class="x5qxkepnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:dvd-logo"} {...others} />);
}

export default Component;
