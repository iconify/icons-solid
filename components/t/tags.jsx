import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sa1jqjb_t.css';

const viewBox = {"width":24,"height":24,"top":-3};
const content = `<path class="sa1jqjb_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:tags"} {...others} />);
}

export default Component;
