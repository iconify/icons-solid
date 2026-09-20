import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gto01yb5j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gto01yb5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:wine-bottle-glass"} {...others} />);
}

export default Component;
