import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l77ykybti.css';
import '../../css/b/boq7xrcxu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l77ykybti"/><path class="boq7xrcxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:banknote-stroke-20"} {...others} />);
}

export default Component;
