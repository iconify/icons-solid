import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oatqgi0zs.css';
import '../../css/c/c5-yaz5ep.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oatqgi0zs"/><path class="c5-yaz5ep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cast"} {...others} />);
}

export default Component;
