import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwibdw4bb.css';
import '../../css/f/fi1eguery.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b bwibdw4bb"/><path class="b fi1eguery"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:shield-circle"} {...others} />);
}

export default Component;
