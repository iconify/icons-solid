import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsk1vyb8u.css';
import '../../css/z/zpm02gbpx.css';
import '../../css/a/am34frbkn.css';
import '../../css/b/b9qb62bje.css';
import '../../css/n/nq4h-9b9i.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="tsk1vyb8u"/><path class="zpm02gbpx"/><path class="am34frbkn"/><path class="b9qb62bje"/><path class="nq4h-9b9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:herb"} {...others} />);
}

export default Component;
