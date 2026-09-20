import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uuqt_yb-q.css';
import '../../css/c/czpq2bq9n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uuqt_yb-q"/><path class="czpq2bq9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:clock"} {...others} />);
}

export default Component;
