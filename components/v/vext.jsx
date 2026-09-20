import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvskf6bla.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nvskf6bla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:vext"} {...others} />);
}

export default Component;
