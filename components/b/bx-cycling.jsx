import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_1r2ws4u.css';
import '../../css/a/a1kinh57h.css';
import '../../css/q/quj0hibon.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o_1r2ws4u"/><circle class="a1kinh57h"/><path class="quj0hibon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-cycling"} {...others} />);
}

export default Component;
