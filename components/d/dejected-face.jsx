import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s35tz368t.css';
import '../../css/h/huuajhmrh.css';
import '../../css/p/p4xjdfe4u.css';
import '../../css/e/eqgsytbpf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="s35tz368t"/><circle class="huuajhmrh"/><path class="p4xjdfe4u"/><path class="eqgsytbpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:dejected-face"} {...others} />);
}

export default Component;
