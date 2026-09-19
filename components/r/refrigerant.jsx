import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsyu_vb3p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xsyu_vb3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:refrigerant"} {...others} />);
}

export default Component;
