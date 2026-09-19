import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yioxj7y0u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yioxj7y0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:edit-line-filled"} {...others} />);
}

export default Component;
