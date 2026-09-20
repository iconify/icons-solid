import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oudmp2tzk.css';
import '../../css/y/y2ef2wbpb.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="oudmp2tzk"/><path class="y2ef2wbpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gatsby"} {...others} />);
}

export default Component;
