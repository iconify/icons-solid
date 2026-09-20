import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gn16o9_6z.css';
import '../../css/j/jsf9fd5pm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gn16o9_6z"/><path clip-rule="evenodd" class="jsf9fd5pm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:bike"} {...others} />);
}

export default Component;
