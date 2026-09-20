import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/poq3ynbiy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="poq3ynbiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:saitama"} {...others} />);
}

export default Component;
