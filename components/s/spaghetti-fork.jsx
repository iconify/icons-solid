import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz_xxr-sp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pz_xxr-sp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:spaghetti-fork"} {...others} />);
}

export default Component;
