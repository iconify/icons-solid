import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmd7ifbkh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cmd7ifbkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:sort-number-desc"} {...others} />);
}

export default Component;
