import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxq6v60ur.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bxq6v60ur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sim"} {...others} />);
}

export default Component;
