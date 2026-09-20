import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xef9d_vbx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xef9d_vbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:south-west-square-fill"} {...others} />);
}

export default Component;
