import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjcnvdb-r.css';
import '../../css/h/huuajhmrh.css';
import '../../css/c/cr8l1lart.css';
import '../../css/c/cd7zj2mlo.css';
import '../../css/b/bzf29r1ev.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wjcnvdb-r"/><circle class="huuajhmrh"/><path class="cr8l1lart"/><path class="cd7zj2mlo"/><path class="bzf29r1ev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:enraged-face"} {...others} />);
}

export default Component;
