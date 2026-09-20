import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwr3a161j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nwr3a161j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:geo"} {...others} />);
}

export default Component;
