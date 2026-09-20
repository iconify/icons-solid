import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl5r9mbkv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nl5r9mbkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:social-twitter"} {...others} />);
}

export default Component;
