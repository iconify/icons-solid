import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebi4uebqf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ebi4uebqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:right-indent-alt"} {...others} />);
}

export default Component;
