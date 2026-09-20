import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/str0shbmn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="str0shbmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:shirt-remix"} {...others} />);
}

export default Component;
