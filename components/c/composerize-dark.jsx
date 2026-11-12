import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yu2v_2bgt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yu2v_2bgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:composerize-dark"} {...others} />);
}

export default Component;
