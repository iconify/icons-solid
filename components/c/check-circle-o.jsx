import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zviov1bvq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zviov1bvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:check-circle-o"} {...others} />);
}

export default Component;
