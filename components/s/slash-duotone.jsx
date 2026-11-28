import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oznlfac6x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oznlfac6x primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:slash-duotone"} {...others} />);
}

export default Component;
