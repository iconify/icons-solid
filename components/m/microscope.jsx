import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkooz0zfl.css';
import '../../css/z/za8l1lbvs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jkooz0zfl"/><path class="za8l1lbvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:microscope"} {...others} />);
}

export default Component;
