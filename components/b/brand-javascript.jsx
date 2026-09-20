import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bunr4sp8t.css';
import '../../css/l/lyccflbxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bunr4sp8t"/><path class="lyccflbxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-javascript"} {...others} />);
}

export default Component;
