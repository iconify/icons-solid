import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uk7w0m4zb.css';
import '../../css/d/dfm4qxg6q.css';
import '../../css/a/amyi9lblt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uk7w0m4zb"/><path class="dfm4qxg6q"/><path clip-rule="evenodd" class="amyi9lblt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:idv"} {...others} />);
}

export default Component;
