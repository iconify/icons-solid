import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsxotrbem.css';
import '../../css/a/a-n77rjap.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hsxotrbem"/><path class="a-n77rjap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:countly"} {...others} />);
}

export default Component;
