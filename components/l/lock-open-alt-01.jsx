import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x73g-fbxv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x73g-fbxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:lock-open-alt-01"} {...others} />);
}

export default Component;
