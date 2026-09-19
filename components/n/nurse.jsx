import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbcopub7q.css';
import '../../css/b/b1n3f83cw.css';

const viewBox = {"width":20,"height":24};
const content = `<path class="xbcopub7q"/><path class="b1n3f83cw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:nurse"} {...others} />);
}

export default Component;
