import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/futw48ihu.css';
import '../../css/s/sngyf7baf.css';
import '../../css/l/lg55wobni.css';
import '../../css/a/apeazccje.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="futw48ihu"/><path class="sngyf7baf"/><path class="lg55wobni"/><path class="apeazccje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:image-file-edit"} {...others} />);
}

export default Component;
