import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s03svacbz.css';
import '../../css/j/jwf99rbtz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s03svacbz"/><path class="jwf99rbtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-icon-filled"} {...others} />);
}

export default Component;
