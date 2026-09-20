import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3bvj6h0w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w3bvj6h0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:folder-connect-filled"} {...others} />);
}

export default Component;
