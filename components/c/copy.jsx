import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pbg7job8e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pbg7job8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:copy"} {...others} />);
}

export default Component;
