import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cg-i2sbad.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cg-i2sbad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:signal-low"} {...others} />);
}

export default Component;
