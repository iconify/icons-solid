import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfn7tp2-z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sfn7tp2-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:list-numbered"} {...others} />);
}

export default Component;
