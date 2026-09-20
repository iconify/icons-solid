import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok-5cd9qq.css';
import '../../css/t/tjtae605g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ok-5cd9qq"/><path clip-rule="evenodd" class="tjtae605g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:scroll-down-2"} {...others} />);
}

export default Component;
