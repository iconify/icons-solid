import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfbn_4p6a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mfbn_4p6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:flash-double"} {...others} />);
}

export default Component;
