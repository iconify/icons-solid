import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgqrdp35g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dgqrdp35g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:checkbox-fill"} {...others} />);
}

export default Component;
