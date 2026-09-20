import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0oj0k_rf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r0oj0k_rf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:doc-medical-filled"} {...others} />);
}

export default Component;
