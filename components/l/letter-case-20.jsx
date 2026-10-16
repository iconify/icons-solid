import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2v02vmol.css';
import '../../css/m/m4hmbobqb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y2v02vmol"/><path class="m4hmbobqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:letter-case-20"} {...others} />);
}

export default Component;
