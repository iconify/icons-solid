import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-txjnb-q.css';
import '../../css/g/g13_2rbsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j-txjnb-q"/><path class="g13_2rbsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:currency-bag-bath"} {...others} />);
}

export default Component;
