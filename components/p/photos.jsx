import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwlb_qanr.css';
import '../../css/z/zt-7pdbvz.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="jwlb_qanr"/><path class="zt-7pdbvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:photos"} {...others} />);
}

export default Component;
