import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kai_8tblw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kai_8tblw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:music-slider"} {...others} />);
}

export default Component;
