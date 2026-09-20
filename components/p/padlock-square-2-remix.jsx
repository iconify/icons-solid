import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pem9t_bvh.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="pem9t_bvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:padlock-square-2-remix"} {...others} />);
}

export default Component;
