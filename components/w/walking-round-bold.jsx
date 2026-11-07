import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhgzc94rg.css';
import '../../css/n/nr1pzgbdt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fhgzc94rg"/><path clip-rule="evenodd" class="nr1pzgbdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:walking-round-bold"} {...others} />);
}

export default Component;
