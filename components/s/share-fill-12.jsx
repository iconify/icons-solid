import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfxlexb0t.css';
import '../../css/b/bn8wa4tsk.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="sfxlexb0t"/><path class="bn8wa4tsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:share-fill-12"} {...others} />);
}

export default Component;
