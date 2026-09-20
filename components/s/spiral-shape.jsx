import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1c8i9qfh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n1c8i9qfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:spiral-shape"} {...others} />);
}

export default Component;
