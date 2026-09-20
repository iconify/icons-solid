import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ac-lxcc5p.css';
import '../../css/o/ofxdamrpd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ac-lxcc5p"/><path class="ofxdamrpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:chips-filled"} {...others} />);
}

export default Component;
