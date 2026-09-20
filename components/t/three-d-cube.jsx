import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfb1oggrc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zfb1oggrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:three-d-cube"} {...others} />);
}

export default Component;
