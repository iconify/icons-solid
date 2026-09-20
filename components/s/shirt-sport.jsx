import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dfyl8ii5t.css';
import '../../css/b/b1ojnacad.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dfyl8ii5t"/><path class="b1ojnacad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shirt-sport"} {...others} />);
}

export default Component;
