import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5rdgsbpl.css';
import '../../css/i/ipz_6dbqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g5rdgsbpl"/><path clip-rule="evenodd" class="ipz_6dbqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:location-plus-outline"} {...others} />);
}

export default Component;
