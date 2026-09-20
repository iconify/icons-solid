import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j1_er5b6a.css';
import '../../css/e/ez1x61b2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j1_er5b6a"/><circle class="ez1x61b2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:columns-settings"} {...others} />);
}

export default Component;
