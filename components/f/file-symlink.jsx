import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ls0qtbc6f.css';
import '../../css/r/rpxqwczho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ls0qtbc6f"/><path class="rpxqwczho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:file-symlink"} {...others} />);
}

export default Component;
