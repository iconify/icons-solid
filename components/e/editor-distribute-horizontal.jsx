import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-wk-pbgm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o-wk-pbgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:editor-distribute-horizontal"} {...others} />);
}

export default Component;
