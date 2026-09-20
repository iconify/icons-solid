import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnf7jx1op.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gnf7jx1op"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:flag-exclamation"} {...others} />);
}

export default Component;
