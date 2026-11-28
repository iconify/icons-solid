import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gff683b6p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gff683b6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:folder-tree-plus"} {...others} />);
}

export default Component;
