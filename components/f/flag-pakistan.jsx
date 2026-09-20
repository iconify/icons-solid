import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7wzorbif.css';
import '../../css/t/tsvbfvbzz.css';
import '../../css/u/uzff1nbwh.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="o7wzorbif"/><path class="tsvbfvbzz"/><path class="uzff1nbwh"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-pakistan"} {...others} />);
}

export default Component;
