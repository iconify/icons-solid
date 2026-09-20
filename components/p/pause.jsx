import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zn493_bmv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zn493_bmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pause"} {...others} />);
}

export default Component;
