import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke-fkibwo.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ke-fkibwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:abuse"} {...others} />);
}

export default Component;
