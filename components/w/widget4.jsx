import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/doqdr5n7j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="doqdr5n7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:widget4"} {...others} />);
}

export default Component;
