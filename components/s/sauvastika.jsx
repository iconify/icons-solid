import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zob4dxq5x.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zob4dxq5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:sauvastika"} {...others} />);
}

export default Component;
