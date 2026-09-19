import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxd94ib7h.css';

const viewBox = {"width":31,"height":24};
const content = `<path class="xxd94ib7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:volume-down"} {...others} />);
}

export default Component;
