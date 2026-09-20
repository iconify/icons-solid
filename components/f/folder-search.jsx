import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rtj68gb4y.css';
import '../../css/y/ya-qhzbdt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rtj68gb4y"/><path class="ya-qhzbdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:folder-search"} {...others} />);
}

export default Component;
