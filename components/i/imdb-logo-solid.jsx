import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccfj4q6iu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ccfj4q6iu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:imdb-logo-solid"} {...others} />);
}

export default Component;
