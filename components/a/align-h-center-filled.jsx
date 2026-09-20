import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnb-kjcok.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fnb-kjcok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:align-h-center-filled"} {...others} />);
}

export default Component;
