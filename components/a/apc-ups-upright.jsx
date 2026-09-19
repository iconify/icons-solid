import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s21x1pboy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s21x1pboy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:apc-ups-upright"} {...others} />);
}

export default Component;
