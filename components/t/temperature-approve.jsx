import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/br4vbfewf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="br4vbfewf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:temperature-approve"} {...others} />);
}

export default Component;
