import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8-0jeb9m.css';
import '../../css/o/o_2dpvb9c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t8-0jeb9m"/><path class="o_2dpvb9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:wallet"} {...others} />);
}

export default Component;
