import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aals9abum.css';
import '../../css/m/mz-fxr5ss.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aals9abum"/><path class="mz-fxr5ss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:book-closed-stroke-20"} {...others} />);
}

export default Component;
