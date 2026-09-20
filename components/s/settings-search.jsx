import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o4ghp704f.css';
import '../../css/c/cn0x12b4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o4ghp704f"/><path class="cn0x12b4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:settings-search"} {...others} />);
}

export default Component;
