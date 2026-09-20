import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvdaepbqt.css';
import '../../css/y/y1wes1v3b.css';
import '../../css/v/v9dfp9b-g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qvdaepbqt"/><path class="y1wes1v3b"/><path class="v9dfp9b-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:onlyoffice"} {...others} />);
}

export default Component;
