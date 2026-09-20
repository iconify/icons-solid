import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7r3pbozs.css';
import '../../css/e/ezke5sblm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c7r3pbozs"/><path class="ezke5sblm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:lcr"} {...others} />);
}

export default Component;
