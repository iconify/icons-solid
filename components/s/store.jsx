import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yag1ve2fw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yag1ve2fw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:store"} {...others} />);
}

export default Component;
