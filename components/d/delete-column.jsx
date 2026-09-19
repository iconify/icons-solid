import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aj-zn2xho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aj-zn2xho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:delete-column"} {...others} />);
}

export default Component;
