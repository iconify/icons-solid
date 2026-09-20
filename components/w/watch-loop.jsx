import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmh04e.css';
import '../../css/m/m7jivk.css';
import '../../css/d/d-h_4q1i.css';
import '../../css/d/d-p1bg5r.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-cqmtvg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tmh04e"/><circle class="m7jivk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:watch-loop"} {...others} />);
}

export default Component;
