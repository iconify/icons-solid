import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amsjd9bhc.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="amsjd9bhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:cast"} {...others} />);
}

export default Component;
