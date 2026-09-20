import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0ofodbav.css';
import '../../css/l/lz8ci3b1r.css';
import '../../css/b/b7a_exv0i.css';
import '../../css/h/hzpfs2baq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l0ofodbav"/><path class="lz8ci3b1r"/><path class="b7a_exv0i"/><path class="hzpfs2baq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-home-1"} {...others} />);
}

export default Component;
