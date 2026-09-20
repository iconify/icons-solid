import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqpkmbbws.css';
import '../../css/m/m_5z3sbiy.css';
import '../../css/g/g8175488f.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qqpkmbbws"/><path class="m_5z3sbiy"/><path class="g8175488f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:apple-solid"} {...others} />);
}

export default Component;
