import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwi8-ubww.css';
import '../../css/a/a3qgfdcno.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zwi8-ubww"/><path class="a3qgfdcno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:azit"} {...others} />);
}

export default Component;
