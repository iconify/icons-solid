import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/or80zd0ep.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="or80zd0ep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:camera-add2-filled"} {...others} />);
}

export default Component;
