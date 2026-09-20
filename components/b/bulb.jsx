import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o63nf12tc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o63nf12tc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bulb"} {...others} />);
}

export default Component;
