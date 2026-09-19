import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hib7cacbk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hib7cacbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:select-multiple"} {...others} />);
}

export default Component;
