import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/liqi8irpe.css';
import '../../css/h/hejk39zyq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="liqi8irpe"/><circle class="hejk39zyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ionic"} {...others} />);
}

export default Component;
