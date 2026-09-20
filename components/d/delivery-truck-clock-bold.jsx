import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0vnwtjwz.css';
import '../../css/z/z59h9eb2b.css';
import '../../css/d/dtvaixlap.css';
import '../../css/a/a3dmwqb8c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l0vnwtjwz"/><path class="z59h9eb2b"/><path class="dtvaixlap"/><path class="a3dmwqb8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:delivery-truck-clock-bold"} {...others} />);
}

export default Component;
