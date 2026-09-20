import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/yinjmruoo.css';
import '../../css/i/ive3fgrdy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="yinjmruoo"/><path class="ive3fgrdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:table"} {...others} />);
}

export default Component;
