import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj-wffr9t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nj-wffr9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:double-bookmark-solid"} {...others} />);
}

export default Component;
