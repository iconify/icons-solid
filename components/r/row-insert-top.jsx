import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm8y8pmpo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xm8y8pmpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:row-insert-top"} {...others} />);
}

export default Component;
