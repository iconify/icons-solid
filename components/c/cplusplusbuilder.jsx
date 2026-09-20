import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1-m7_38a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f1-m7_38a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:cplusplusbuilder"} {...others} />);
}

export default Component;
