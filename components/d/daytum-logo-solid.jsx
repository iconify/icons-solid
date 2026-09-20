import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg3w45bsj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xg3w45bsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:daytum-logo-solid"} {...others} />);
}

export default Component;
