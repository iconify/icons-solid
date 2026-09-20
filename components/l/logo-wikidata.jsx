import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngl7jtepb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ngl7jtepb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:logo-wikidata"} {...others} />);
}

export default Component;
