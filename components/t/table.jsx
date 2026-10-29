import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhp4b7gcv.css';
import '../../css/n/nos6nfben.css';
import '../../css/o/o4qtwp2ep.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mhp4b7gcv"/><path class="nos6nfben"/><path class="o4qtwp2ep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:table"} {...others} />);
}

export default Component;
