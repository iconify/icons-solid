import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n74bk89qt.css';
import '../../css/j/jmu1l6njj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n74bk89qt"/><path clip-rule="evenodd" class="jmu1l6njj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:clock-outline"} {...others} />);
}

export default Component;
