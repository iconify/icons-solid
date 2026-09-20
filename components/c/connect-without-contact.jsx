import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vzx8o9bvv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vzx8o9bvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:connect-without-contact"} {...others} />);
}

export default Component;
