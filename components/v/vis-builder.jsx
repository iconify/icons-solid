import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_snteb-s.css';
import '../../css/b/b05e0yo7m.css';
import '../../css/t/tnas7_1ty.css';

const viewBox = {"width":32,"height":33};
const content = `<path clip-rule="evenodd" class="b_snteb-s"/><path clip-rule="evenodd" class="b05e0yo7m"/><path clip-rule="evenodd" class="tnas7_1ty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:vis-builder"} {...others} />);
}

export default Component;
