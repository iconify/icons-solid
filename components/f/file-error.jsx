import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jw7q3l5ax.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jw7q3l5ax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:file-error"} {...others} />);
}

export default Component;
