import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xiewx4bml.css';
import '../../css/t/ta73ae7hy.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="xiewx4bml"/><path class="ta73ae7hy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:somalia"} {...others} />);
}

export default Component;
