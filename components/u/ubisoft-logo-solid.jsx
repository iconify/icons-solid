import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lal5kjbxz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lal5kjbxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:ubisoft-logo-solid"} {...others} />);
}

export default Component;
