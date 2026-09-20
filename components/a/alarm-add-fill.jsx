import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwvbtus1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gwvbtus1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:alarm-add-fill"} {...others} />);
}

export default Component;
