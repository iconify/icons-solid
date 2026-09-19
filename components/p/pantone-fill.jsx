import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx2s7v57f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zx2s7v57f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:pantone-fill"} {...others} />);
}

export default Component;
