import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idd3-bjtr.css';
import '../../css/i/ifbp0ub9u.css';
import '../../css/f/fp0jp3bog.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="idd3-bjtr"/><path class="ifbp0ub9u"/><path class="fp0jp3bog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:run-mirror"} {...others} />);
}

export default Component;
