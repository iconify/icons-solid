import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erfmhctcc.css';
import '../../css/b/b-t5aibbb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-primary-layer erfmhctcc"/><path class="b-t5aibbb duoicon-secondary-layer"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:location"} {...others} />);
}

export default Component;
