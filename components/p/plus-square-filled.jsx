import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ociw6s2sq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ociw6s2sq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:plus-square-filled"} {...others} />);
}

export default Component;
