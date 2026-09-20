import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p06rsmb8a.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="p06rsmb8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:nav-slos"} {...others} />);
}

export default Component;
