import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d46e2yb0n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d46e2yb0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:building-tree-fill"} {...others} />);
}

export default Component;
