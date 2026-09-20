import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ta49hdc7b.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="ta49hdc7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:paycheck"} {...others} />);
}

export default Component;
