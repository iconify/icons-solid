import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwk_1c3ab.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="lwk_1c3ab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:campingcar"} {...others} />);
}

export default Component;
