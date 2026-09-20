import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdm9qq6xg.css';
import '../../css/u/uuqt_yb-q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jdm9qq6xg"/><path class="uuqt_yb-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:info-circle"} {...others} />);
}

export default Component;
