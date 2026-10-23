import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t00v4ta5s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t00v4ta5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:russian-ruble"} {...others} />);
}

export default Component;
