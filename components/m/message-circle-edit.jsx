import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fq-j3-asd.css';
import '../../css/f/fu72iwgtz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fq-j3-asd"/><path class="fu72iwgtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:message-circle-edit"} {...others} />);
}

export default Component;
