import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gg5idf3sf.css';
import '../../css/v/vtcohfdfk.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="gg5idf3sf"/><path class="vtcohfdfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:white-pentagon"} {...others} />);
}

export default Component;
