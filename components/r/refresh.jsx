import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y3uynx5-a.css';
import '../../css/e/exv7xp9oy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y3uynx5-a"/><path class="exv7xp9oy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:refresh"} {...others} />);
}

export default Component;
