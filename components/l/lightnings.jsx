import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3zgc2n5n.css';

const viewBox = {"width":28,"height":24};
const content = `<path class="n3zgc2n5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:lightnings"} {...others} />);
}

export default Component;
