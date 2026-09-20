import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpz99yx7n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dpz99yx7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cell-border-frame"} {...others} />);
}

export default Component;
