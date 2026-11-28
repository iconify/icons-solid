import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjc0ajicx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gjc0ajicx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:treemap-solid"} {...others} />);
}

export default Component;
