import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itva-1bmg.css';
import '../../css/o/o6y24yasb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="itva-1bmg"/><path class="o6y24yasb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:brush-sparkles-filled"} {...others} />);
}

export default Component;
