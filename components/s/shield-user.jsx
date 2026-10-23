import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zqeh-wb6x.css';
import '../../css/f/f4bvd6l3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zqeh-wb6x"/><path class="f4bvd6l3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:shield-user"} {...others} />);
}

export default Component;
