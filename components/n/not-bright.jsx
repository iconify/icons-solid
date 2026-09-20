import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_lobbbaz.css';

const viewBox = {"width":20,"height":20};
const content = `<circle class="o_lobbbaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:not-bright"} {...others} />);
}

export default Component;
