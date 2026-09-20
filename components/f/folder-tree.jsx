import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f-he-fobn.css';
import '../../css/o/o5n61tbtj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f-he-fobn"/><path class="o5n61tbtj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:folder-tree"} {...others} />);
}

export default Component;
