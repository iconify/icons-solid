import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifde2vb-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ifde2vb-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:horizontal-down-left-main"} {...others} />);
}

export default Component;
