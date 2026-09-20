import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3v6f1bdo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k3v6f1bdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:folder-remove-filled"} {...others} />);
}

export default Component;
