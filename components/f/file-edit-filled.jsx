import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2la8ubsr.css';
import '../../css/r/rphcwab-a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c2la8ubsr"/><path class="rphcwab-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-edit-filled"} {...others} />);
}

export default Component;
