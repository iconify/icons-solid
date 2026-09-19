import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldjgpjbom.css';
import '../../css/c/chq_v_ohg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ldjgpjbom"/><path class="chq_v_ohg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:direction-merge-filled"} {...others} />);
}

export default Component;
