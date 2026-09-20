import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ervr_zbjr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ervr_zbjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:circle-arrow-down-filled"} {...others} />);
}

export default Component;
