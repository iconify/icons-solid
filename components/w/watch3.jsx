import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz3rlt3dw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nz3rlt3dw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:watch3"} {...others} />);
}

export default Component;
