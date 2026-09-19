import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to8u9k8yb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="to8u9k8yb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:sd"} {...others} />);
}

export default Component;
