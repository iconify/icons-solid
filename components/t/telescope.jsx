import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb7520byi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kb7520byi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:telescope"} {...others} />);
}

export default Component;
