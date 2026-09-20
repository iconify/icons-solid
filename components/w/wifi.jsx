import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq_pn4bqq.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-5};
const content = `<path class="wq_pn4bqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:wifi"} {...others} />);
}

export default Component;
