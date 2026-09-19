import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fr3rnzvyj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fr3rnzvyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:paint-brush-01"} {...others} />);
}

export default Component;
