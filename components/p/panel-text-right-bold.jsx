import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzmx73baa.css';
import '../../css/j/jt5nlubqy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pzmx73baa"/><path clip-rule="evenodd" class="jt5nlubqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-text-right-bold"} {...others} />);
}

export default Component;
