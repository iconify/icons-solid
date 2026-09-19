import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iun5hukdv.css';

const viewBox = {"width":1280,"height":1472};
const content = `<path class="iun5hukdv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:user-suit-female"} {...others} />);
}

export default Component;
