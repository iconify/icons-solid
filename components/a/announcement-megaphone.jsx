import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/whzrr2dys.css';
import '../../css/q/qnmv0jb6u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="whzrr2dys"/><path class="qnmv0jb6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:announcement-megaphone"} {...others} />);
}

export default Component;
