import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1fanqb7g.css';
import '../../css/h/hxd1rr2uo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l1fanqb7g"/><path class="hxd1rr2uo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:grs"} {...others} />);
}

export default Component;
