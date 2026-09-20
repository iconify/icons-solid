import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-7h8fb2z.css';
import '../../css/r/r21n4gx1c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c-7h8fb2z"/><path class="r21n4gx1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:pc"} {...others} />);
}

export default Component;
