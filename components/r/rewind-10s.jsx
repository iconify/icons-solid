import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncx9_cchy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ncx9_cchy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:rewind-10s"} {...others} />);
}

export default Component;
