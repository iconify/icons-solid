import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvklctb1s.css';
import '../../css/h/hck-_bb5b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xvklctb1s"/><path class="hck-_bb5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-pie"} {...others} />);
}

export default Component;
