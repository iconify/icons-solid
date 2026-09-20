import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bekoxbt4z.css';
import '../../css/v/vx50m9b9j.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="bekoxbt4z"/><path class="vx50m9b9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:image"} {...others} />);
}

export default Component;
