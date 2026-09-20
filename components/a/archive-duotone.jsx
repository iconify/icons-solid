import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y-4f733an.css';
import '../../css/z/zho2v7bvt.css';
import '../../css/k/kv0-jmbme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y-4f733an"/><path class="zho2v7bvt"/><path class="kv0-jmbme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:archive-duotone"} {...others} />);
}

export default Component;
