import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ye4bivxcv.css';
import '../../css/u/uq7ud8o0q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ye4bivxcv"/><path class="uq7ud8o0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:wifi"} {...others} />);
}

export default Component;
