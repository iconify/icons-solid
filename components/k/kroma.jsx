import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbfdil6ak.css';
import '../../css/q/qvfvdgulf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bbfdil6ak"/><path class="qvfvdgulf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:kroma"} {...others} />);
}

export default Component;
