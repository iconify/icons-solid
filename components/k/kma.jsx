import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebm2gkc5z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ebm2gkc5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:kma"} {...others} />);
}

export default Component;
