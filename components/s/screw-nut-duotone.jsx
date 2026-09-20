import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfyl5d5vt.css';
import '../../css/c/c0mbupb-p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cfyl5d5vt"/><path class="c0mbupb-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:screw-nut-duotone"} {...others} />);
}

export default Component;
