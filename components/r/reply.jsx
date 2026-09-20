import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltktxhbob.css';
import '../../css/j/j6gfa_94f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ltktxhbob"/><path class="j6gfa_94f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:reply"} {...others} />);
}

export default Component;
