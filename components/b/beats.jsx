import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qy3pqcxku.css';
import '../../css/g/gy0kacpby.css';
import '../../css/q/qq36dbo-t.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="qy3pqcxku"/><path class="gy0kacpby"/><path class="qq36dbo-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:beats"} {...others} />);
}

export default Component;
