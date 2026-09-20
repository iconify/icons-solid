import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfsrp3blm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bfsrp3blm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:casino-lucky-7-bold"} {...others} />);
}

export default Component;
