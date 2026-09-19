import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dg9qp9bnj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dg9qp9bnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:home-minus"} {...others} />);
}

export default Component;
