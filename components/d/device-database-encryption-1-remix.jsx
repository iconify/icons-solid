import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-9otgbjk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j-9otgbjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:device-database-encryption-1-remix"} {...others} />);
}

export default Component;
