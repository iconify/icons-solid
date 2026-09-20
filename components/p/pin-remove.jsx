import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9vh884bd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b9vh884bd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pin-remove"} {...others} />);
}

export default Component;
