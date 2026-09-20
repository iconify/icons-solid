import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y76ps7bna.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y76ps7bna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:crop-fill"} {...others} />);
}

export default Component;
