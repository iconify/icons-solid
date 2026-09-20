import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvmw99abz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hvmw99abz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:refresh-right-square-filled"} {...others} />);
}

export default Component;
