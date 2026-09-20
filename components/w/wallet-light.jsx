import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/offmweb-q.css';
import '../../css/g/gotjsow0d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="offmweb-q"/><path class="gotjsow0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:wallet-light"} {...others} />);
}

export default Component;
