import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/moai_zk6z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="moai_zk6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:uplabs-logo-solid"} {...others} />);
}

export default Component;
