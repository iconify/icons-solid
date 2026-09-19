import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x848pdb4a.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="x848pdb4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:linkedin-rect"} {...others} />);
}

export default Component;
