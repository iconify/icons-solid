import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t__cc02fu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t__cc02fu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:phone3"} {...others} />);
}

export default Component;
