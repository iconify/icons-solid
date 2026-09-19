import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gu5lx12xc.css';
import '../../css/z/zla48o_aw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gu5lx12xc"/><path clip-rule="evenodd" class="zla48o_aw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:document-magnifying-glass-16-solid"} {...others} />);
}

export default Component;
