import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r61zubcbw.css';
import '../../css/x/xsmx0tbhg.css';
import '../../css/t/t0b5xqyha.css';
import '../../css/v/v4gzgfbbi.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="r61zubcbw"/><path class="xsmx0tbhg"/><path class="t0b5xqyha"/><path class="v4gzgfbbi"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:demisexual"} {...others} />);
}

export default Component;
