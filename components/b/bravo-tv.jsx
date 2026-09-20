import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1ypqnbnq.css';
import '../../css/w/wjox9-bub.css';

const viewBox = {"width":999,"height":755};
const content = `<path class="r1ypqnbnq"/><path class="wjox9-bub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bravo-tv"} {...others} />);
}

export default Component;
