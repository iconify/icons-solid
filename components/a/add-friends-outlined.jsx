import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahhfo8gsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ahhfo8gsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:add-friends-outlined"} {...others} />);
}

export default Component;
