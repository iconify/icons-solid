import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n02wsu58a.css';
import '../../css/k/kb5ad6bed.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n02wsu58a"/><path class="kb5ad6bed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:file-search"} {...others} />);
}

export default Component;
