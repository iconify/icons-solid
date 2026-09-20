import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj_l_4b6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nj_l_4b6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:bandcamp-logo-1-solid"} {...others} />);
}

export default Component;
