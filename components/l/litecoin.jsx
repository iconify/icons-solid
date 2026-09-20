import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugcq4-b9s.css';
import '../../css/s/s-czd34rq.css';

const viewBox = {"width":82.6,"height":82.6};
const content = `<circle class="ugcq4-b9s"/><path class="s-czd34rq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:litecoin"} {...others} />);
}

export default Component;
