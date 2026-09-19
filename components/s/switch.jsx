import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k375m-b2r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k375m-b2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:switch"} {...others} />);
}

export default Component;
