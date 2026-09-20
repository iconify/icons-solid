import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uutlz_-9i.css';
import '../../css/g/gbqhv3bwt.css';
import '../../css/j/jj9cr0awe.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="uutlz_-9i"/><path class="gbqhv3bwt"/><path class="jj9cr0awe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:instagram"} {...others} />);
}

export default Component;
