import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b93j9cbjr.css';
import '../../css/r/r389qlbwq.css';
import '../../css/i/iirdoip_j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b93j9cbjr"/><path class="r389qlbwq"/><circle class="iirdoip_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:compass"} {...others} />);
}

export default Component;
