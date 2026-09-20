import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cpza59blp.css';
import '../../css/a/a7t0-2pev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cpza59blp"/><path class="a7t0-2pev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:git-branch"} {...others} />);
}

export default Component;
