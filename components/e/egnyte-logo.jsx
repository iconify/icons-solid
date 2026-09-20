import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kk0b6wf2q.css';
import '../../css/u/u4qj0eb8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="kk0b6wf2q"/><path class="u4qj0eb8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:egnyte-logo"} {...others} />);
}

export default Component;
