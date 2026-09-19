import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ciq3bmhsq.css';

const viewBox = {"width":34,"height":24};
const content = `<path class="ciq3bmhsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:quote-right"} {...others} />);
}

export default Component;
